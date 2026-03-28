const fs = require('fs');
const path = require('path');

const indexHtml = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
const testHtmlPath = path.join(__dirname, 'test', 'test.html');
let testHtml = fs.readFileSync(testHtmlPath, 'utf8');

// 1. Extract Header & Mobile Nav from index.html
const startHeader = indexHtml.indexOf('<header>');
const endHeader = indexHtml.indexOf('</header>') + '</header>'.length;
let header = indexHtml.slice(startHeader, endHeader);

const startMobileNav = indexHtml.indexOf('<div class="mobile-nav" id="mobileNav">');
const endMobileNav = indexHtml.indexOf('</div>', indexHtml.indexOf('Quitter', startMobileNav)) + '</div>'.length; 
let mobileNav = indexHtml.slice(startMobileNav, endMobileNav);

// 2. Adjust paths and onclicks in header and mobileNav for test.html
function fixLinks(htmlStr) {
    let s = htmlStr;
    // Fix navigation inside app (to go back to index.html instead)
    s = s.replace(/window\.app\.navigate\('dashboard'\)/g, "window.location.href='../index.html'");
    s = s.replace(/window\.app\.navigate\('jobs'\)/g, "window.location.href='../index.html#jobs'");
    s = s.replace(/window\.app\.navigate\('comparator'\)/g, "window.location.href='../index.html#comparator'");
    s = s.replace(/window\.app\.navigate\('reservation'\)/g, "window.location.href='../index.html#reservation'");
    
    // Fix regular links
    s = s.replace(/'métiers\.html'/g, "'../métiers.html'");
    s = s.replace(/'écoles\/premier\.html'/g, "'../écoles/premier.html'");
    
    return s;
}

header = fixLinks(header);
mobileNav = fixLinks(mobileNav) + '\n</div>';

// Append specialized logic to test.html so toggleTheme and toggleMenu work without injecting the massive script.js
const testAppScript = `
    <script>
        window.app = {
            toggleTheme: function() {
                this.isDarkMode = !this.isDarkMode;
                const newTheme = this.isDarkMode ? 'dark' : 'light';
                document.documentElement.setAttribute('data-theme', newTheme);
                try { localStorage.setItem('orienta_theme', newTheme); } catch(e) {}
            },
            toggleMenu: function() {
                const nav = document.getElementById('mobileNav');
                if(nav) nav.classList.toggle('open');
            },
            logout: function() {
                try { localStorage.removeItem('user_profile'); } catch(e) {}
                window.location.href = '../index.html';
            }
        };
        // Initialize state
        try {
            if (localStorage.getItem('orienta_theme') === 'dark') {
                window.app.isDarkMode = true;
                document.documentElement.setAttribute('data-theme', 'dark');
            }
        } catch(e) {}
    </script>
`;

// 3. Remove old header from test.html
const oldHeaderRegex = /<header class="header">[\s\S]*?<\/header>/;
testHtml = testHtml.replace(oldHeaderRegex, '');

// 4. Inject new header into body
const bodyStart = testHtml.indexOf('<div class="main-container">');
testHtml = testHtml.slice(0, bodyStart) + '\n' + header + '\n' + mobileNav + '\n' + testHtml.slice(bodyStart);

// 5. Inject anti-flicker and CSS into head
const cssImport = `    <link rel="stylesheet" href="../style.css">\n${testAppScript}`;
if (!testHtml.includes('../style.css')) {
    testHtml = testHtml.replace('</head>', cssImport + '\n</head>');
}

// 6. Update CSS variables and Body
const oldVars = /:root\s*{[^}]*--bg-primary:[^}]*}/;
const newVars = `:root {
      /* Mode Clair (Variables alignées sur style.css) */
      --bg-primary: var(--bg-body, #F8F9FA);
      --bg-secondary: #E5E7EB;
      --bg-card: var(--bg-surface, #ffffff);
      --accent-blue: var(--primary, #006064);
      --accent-light: var(--primary-light, #4DD0E1);
      --accent-glow: var(--secondary, #009688);
      --text-dark: var(--text-main, #1F2937);
      --text-muted: var(--text-muted, #6B7280);
      --border-light: var(--border-color, #E5E7EB);
      --success: #10b981;
    }

    /* Mode Sombre (Hérite du data-theme="dark") */
    [data-theme="dark"] {
      --bg-secondary: #0F172A;
      /* Les autres variables héritent automatiquement des valeurs inversées de style.css ! */
    }`;

if (oldVars.test(testHtml)) {
    testHtml = testHtml.replace(oldVars, newVars);
}

const oldBodyCss = /body\s*{[^}]*background: linear-gradient[^}]*}/;
const newBodyCss = `body {
      font-family: 'Inter', sans-serif;
      background: var(--bg-primary);
      min-height: 100vh;
      color: var(--text-dark);
      overflow-x: hidden;
    }`;

if (oldBodyCss.test(testHtml)) {
    testHtml = testHtml.replace(oldBodyCss, newBodyCss);
}

// Also change .likert-label background to respect --bg-card
testHtml = testHtml.replace(/background: #f8fafc;/g, "background: var(--bg-card);");
testHtml = testHtml.replace(/background: #f1f5f9;/g, "background: var(--bg-secondary);");
// Remove forced "color: white" from .back-btn
testHtml = testHtml.replace(/color: white;\s*text-decoration: none;\s*font-weight: 500;/g, "color: inherit; text-decoration: none; font-weight: 500;");

// Fix header color context if necessary
// The header in test.html is now identical to index.html which works great!

fs.writeFileSync(testHtmlPath, testHtml, 'utf8');
console.log('Successfully synced templates for test/test.html');
