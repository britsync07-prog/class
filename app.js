const appState = {
    isAuthenticated: false
};

const solutions = {
  1: `#include <stdio.h>\n#define PI 3.14159\n\nint main() {\n    float r, area, circ;\n    scanf("%f", &r);\n    area = PI * r * r;\n    circ = 2 * PI * r;\n    printf("Area: %.2f, Circumference: %.2f\\n", area, circ);\n    return 0;\n}`,
  2: `#include <stdio.h>\n\nint main() {\n    float f, c;\n    scanf("%f", &f);\n    c = (f - 32) * 5 / 9;\n    printf("Celsius: %.2f\\n", c);\n    return 0;\n}`,
  3: `#include <stdio.h>\n\nint main() {\n    float c, f;\n    scanf("%f", &c);\n    f = (c * 9 / 5) + 32;\n    printf("Fahrenheit: %.2f\\n", f);\n    return 0;\n}`,
  4: `#include <stdio.h>\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    if (n % 2 == 0) {\n        printf("Even\\n");\n    } else {\n        printf("Odd\\n");\n    }\n    return 0;\n}`,
  5: `#include <stdio.h>\n\nint main() {\n    int a, b;\n    scanf("%d %d", &a, &b);\n    if (a > b) {\n        printf("Max: %d, Min: %d\\n", a, b);\n    } else {\n        printf("Max: %d, Min: %d\\n", b, a);\n    }\n    return 0;\n}`,
  6: `#include <stdio.h>\n\nint main() {\n    int a, b, c, max, min;\n    scanf("%d %d %d", &a, &b, &c);\n    max = a; min = a;\n    if (b > max) {\n        max = b;\n    }\n    if (b < min) {\n        min = b;\n    }\n    if (c > max) {\n        max = c;\n    }\n    if (c < min) {\n        min = c;\n    }\n    printf("Max: %d, Min: %d\\n", max, min);\n    return 0;\n}`,
  7: `#include <stdio.h>\n#include <math.h>\n\nint main() {\n    float a, b, c, d, r1, r2;\n    scanf("%f %f %f", &a, &b, &c);\n    d = b * b - 4 * a * c;\n    if (d > 0) {\n        r1 = (-b + sqrt(d)) / (2 * a);\n        r2 = (-b - sqrt(d)) / (2 * a);\n        printf("Roots: %.2f, %.2f\\n", r1, r2);\n    } else if (d == 0) {\n        r1 = -b / (2 * a);\n        printf("Root: %.2f\\n", r1);\n    } else {\n        printf("Complex roots\\n");\n    }\n    return 0;\n}`,
  8: `#include <stdio.h>\n\nint main() {\n    int n;\n    float sum = 0, val;\n    scanf("%d", &n);\n    for (int i = 0; i < n; i++) {\n        scanf("%f", &val);\n        sum += val;\n    }\n    printf("Average: %.2f\\n", sum / n);\n    return 0;\n}`,
  9: `#include <stdio.h>\n\nint main() {\n    int n, bin[32], i = 0;\n    scanf("%d", &n);\n    if (n == 0) {\n        printf("0\\n");\n        return 0;\n    }\n    while (n > 0) {\n        bin[i++] = n % 2;\n        n /= 2;\n    }\n    for (int j = i - 1; j >= 0; j--) {\n        printf("%d", bin[j]);\n    }\n    printf("\\n");\n    return 0;\n}`,
  10: `#include <stdio.h>\n\nint main() {\n    int n;\n    long long sum = 0;\n    scanf("%d", &n);\n    sum = (long long)n * (n + 1) / 2;\n    printf("Sum: %lld\\n", sum);\n    return 0;\n}`,
  11: `#include <stdio.h>\n\nint main() {\n    int n;\n    long long fact = 1;\n    scanf("%d", &n);\n    for (int i = 1; i <= n; i++) {\n        fact *= i;\n    }\n    printf("Factorial: %lld\\n", fact);\n    return 0;\n}`,
  12: `#include <stdio.h>\n\nint main() {\n    int n, a = 0, b = 1, c;\n    scanf("%d", &n);\n    if (n <= 0) {\n        return 0;\n    }\n    if (n == 1) {\n        printf("%d\\n", a);\n        return 0;\n    }\n    printf("%d %d ", a, b);\n    for (int i = 3; i <= n; i++) {\n        c = a + b;\n        printf("%d%c", c, i == n ? '\\0' : ' ');\n        a = b;\n        b = c;\n    }\n    printf("\\n");\n    return 0;\n}`,
  13: `#include <stdio.h>\n\nint main() {\n    int n, i, j, isPrime;\n    scanf("%d", &n);\n    for (i = 2; i <= n; i++) {\n        isPrime = 1;\n        for (j = 2; j <= i / 2; j++) {\n            if (i % j == 0) {\n                isPrime = 0;\n                break;\n            }\n        }\n        if (isPrime) {\n            printf("%d ", i);\n        }\n    }\n    printf("\\n");\n    return 0;\n}`,
  14: `#include <stdio.h>\n\nint main() {\n    int n, rev = 0;\n    scanf("%d", &n);\n    while (n != 0) {\n        rev = rev * 10 + n % 10;\n        n /= 10;\n    }\n    printf("Reversed: %d\\n", rev);\n    return 0;\n}`,
  15: `#include <stdio.h>\n\nint main() {\n    int n, sum = 0;\n    scanf("%d", &n);\n    while (n != 0) {\n        sum += n % 10;\n        n /= 10;\n    }\n    printf("Sum of digits: %d\\n", sum);\n    return 0;\n}`,
  16: `#include <stdio.h>\n\nint main() {\n    float num;\n    scanf("%f", &num);\n    int integerPart = (int)num;\n    float fractionalPart = num - integerPart;\n    printf("Integer: %d, Fractional: %f\\n", integerPart, fractionalPart);\n    return 0;\n}`,
  17: `#include <stdio.h>\n\nint main() {\n    int n;\n    float sum = 0.0;\n    scanf("%d", &n);\n    for (int i = 1; i <= n; i++) {\n        sum += 1.0 / (i * i);\n    }\n    printf("Sum: %.4f\\n", sum);\n    return 0;\n}`,
  18: `#include <stdio.h>\n\nint main() {\n    int a[3][3], b[3][3], c[3][3];\n    for (int i = 0; i < 3; i++) {\n        for (int j = 0; j < 3; j++) {\n            scanf("%d", &a[i][j]);\n        }\n    }\n    for (int i = 0; i < 3; i++) {\n        for (int j = 0; j < 3; j++) {\n            scanf("%d", &b[i][j]);\n        }\n    }\n    for (int i = 0; i < 3; i++) {\n        for (int j = 0; j < 3; j++) {\n            c[i][j] = a[i][j] + b[i][j];\n            printf("%d ", c[i][j]);\n        }\n        printf("\\n");\n    }\n    return 0;\n}`,
  19: `#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char s[100];\n    scanf("%s", s);\n    int len = strlen(s);\n    for (int i = len; i > 0; i--) {\n        for (int j = 0; j < i; j++) {\n            printf("%c", s[j]);\n        }\n        printf("\\n");\n    }\n    return 0;\n}`,
  20: `#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char s[100];\n    scanf("%s", s);\n    int len = strlen(s);\n    for (int i = 0; i < len; i++) {\n        for (int j = i; j < len; j++) {\n            printf("%c", s[j]);\n        }\n        printf("\\n");\n    }\n    return 0;\n}`,
  21: `#include <stdio.h>\n\nint main() {\n    int a[3][3], b[3][3], c[3][3];\n    for (int i = 0; i < 3; i++) {\n        for (int j = 0; j < 3; j++) {\n            scanf("%d", &a[i][j]);\n        }\n    }\n    for (int i = 0; i < 3; i++) {\n        for (int j = 0; j < 3; j++) {\n            scanf("%d", &b[i][j]);\n        }\n    }\n    for (int i = 0; i < 3; i++) {\n        for (int j = 0; j < 3; j++) {\n            c[i][j] = a[i][j] + b[i][j];\n            printf("%d ", c[i][j]);\n        }\n        printf("\\n");\n    }\n    return 0;\n}`,
  22: `#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char s1[100], s2[100], s3[200];\n    scanf("%s %s", s1, s2);\n    printf("Len1: %lu, Len2: %lu\\n", strlen(s1), strlen(s2));\n    strcpy(s3, s1);\n    printf("Copy: %s\\n", s3);\n    strcat(s3, s2);\n    printf("Concat: %s\\n", s3);\n    printf("Compare: %d\\n", strcmp(s1, s2));\n    return 0;\n}`,
  23: `#include <stdio.h>\n#include <ctype.h>\n#include <string.h>\n\nint main() {\n    char s[200];\n    int v = 0, c = 0;\n    fgets(s, sizeof(s), stdin);\n    for (int i = 0; s[i] != '\\0'; i++) {\n        char ch = tolower(s[i]);\n        if (ch >= 'a' && ch <= 'z') {\n            if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {\n                v++;\n            } else {\n                c++;\n            }\n        }\n    }\n    printf("Vowels: %d, Consonants: %d\\n", v, c);\n    return 0;\n}`,
  24: `#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char s[100], rev[100];\n    scanf("%s", s);\n    int len = strlen(s);\n    for (int i = 0; i < len; i++) {\n        rev[i] = s[len - 1 - i];\n    }\n    rev[len] = '\\0';\n    if (strcmp(s, rev) == 0) {\n        printf("Palindrome\\n");\n    } else {\n        printf("Not Palindrome\\n");\n    }\n    return 0;\n}`
};

const testCases = {
  1: [{ input: "4.5", output: "Area: 63.62, Circumference: 28.27" }],
  2: [{ input: "67", output: "Celsius: 19.44" }],
  3: [
    { input: "37", output: "Fahrenheit: 98.60" },
    { input: "0", output: "Fahrenheit: 32.00" }
  ],
  4: [
    { input: "4", output: "Even" },
    { input: "7", output: "Odd" }
  ],
  5: [
    { input: "10 20", output: "Max: 20, Min: 10" },
    { input: "15 5", output: "Max: 15, Min: 5" }
  ],
  6: [
    { input: "5 10 15", output: "Max: 15, Min: 5" },
    { input: "20 10 5", output: "Max: 20, Min: 5" }
  ],
  7: [
    { input: "1 -5 6", output: "Roots: 3.00, 2.00" },
    { input: "1 -2 1", output: "Root: 1.00" }
  ],
  8: [{ input: "6\n6 8 10 18.57 25 35", output: "Average: 17.10" }],
  9: [
    { input: "10", output: "1010" },
    { input: "15", output: "1111" }
  ],
  10: [{ input: "75", output: "Sum: 2850" }],
  11: [
    { input: "5", output: "Factorial: 120" },
    { input: "6", output: "Factorial: 720" }
  ],
  12: [{ input: "10", output: "0 1 1 2 3 5 8 13 21 34" }],
  13: [
    { input: "10", output: "2 3 5 7" },
    { input: "20", output: "2 3 5 7 11 13 17 19" }
  ],
  14: [
    { input: "1234", output: "Reversed: 4321" },
    { input: "9876", output: "Reversed: 6789" }
  ],
  15: [
    { input: "123", output: "Sum of digits: 6" },
    { input: "456", output: "Sum of digits: 15" }
  ],
  16: [
    { input: "12.34", output: "Integer: 12, Fractional: 0.340000" },
    { input: "9.99", output: "Integer: 9, Fractional: 0.990000" }
  ],
  17: [
    { input: "2", output: "Sum: 1.2500" },
    { input: "3", output: "Sum: 1.3611" }
  ],
  18: [{ input: "1 2 3 4 5 6 7 8 9\n9 8 7 6 5 4 3 2 1", output: "10 10 10\n10 10 10\n10 10 10" }],
  19: [{ input: "4567", output: "4567\n456\n45\n4" }],
  20: [{ input: "4567", output: "4567\n567\n67\n7" }],
  21: [{ input: "1 2 3 4 5 6 7 8 9\n9 8 7 6 5 4 3 2 1", output: "10 10 10\n10 10 10\n10 10 10" }],
  22: [{ input: "Bangla desh", output: "Len1: 6, Len2: 4\nCopy: Bangla\nConcat: Bangladesh\nCompare: -1" }],
  23: [{ input: "Bangladesh is my mother land.", output: "Vowels: 7, Consonants: 17" }],
  24: [
    { input: "radar", output: "Palindrome" },
    { input: "hello", output: "Not Palindrome" }
  ]
};

function cleanMath(str) {
    return str
        .replace(/\\\pi/g, 'π')
        .replace(/\^2/g, '²')
        .replace(/\\dots/g, '...')
        .replace(/\\times/g, '×')
        .replace(/\\frac{([^}]+)}{([^}]+)}/g, '$1 / $2')
        .replace(/\$/g, '');
}

// --- Parser & Data Generation ---
async function initializeData() {
    if (window.appData) return window.appData;

    try {
        const [qRes, fRes] = await Promise.all([
            fetch('/questions.txt'),
            fetch('/format.txt')
        ]);
        
        if (!qRes.ok || !fRes.ok) throw new Error("Failed to load data files.");

        const qText = await qRes.text();
        const formatText = await fRes.text();

        const lines = qText.split('\n').filter(l => l.trim().length > 0);
        const generatedJSON = [];

        lines.forEach((line, index) => {
            let cleanedLine = line.replace(/\d+$/, '').trim();
            const match = cleanedLine.match(/^Problem\s+(\d+):\s+(.*)$/i);
            let num = index + 1;
            let desc = cleanedLine;
            if (match) {
                num = parseInt(match[1], 10);
                desc = match[2];
            }

            const cCode = solutions[num] || "// Solution missing";
            
            // Format insertion
            const cleanDesc = cleanMath(desc);
            let formatted = formatText.replace(/Write a program to:\s+_{2,}/, `Write a program to: ${cleanDesc}`);
            
            formatted = formatted.replace(/#include <stdio\.h>[\s\S]*?return 0;\n\}/, cCode);
            
            // Replace test cases blanks vertically
            let tCasesStr = "";
            const currentTestCases = testCases[num] || [{ input: "10", output: "Result" }];
            currentTestCases.forEach((tCase, i) => {
                tCasesStr += `Sample Input ${i+1}:\n${tCase.input}\nSample Output ${i+1}:\n${tCase.output}\n\n`;
            });
            formatted = formatted.replace(/Test Cases:[\s\S]*$/, `Test Cases:\n\n${tCasesStr.trim()}`);

            generatedJSON.push({
                id: num,
                title: `Problem ${String(num).padStart(2, '0')}`,
                question: cleanDesc,
                solution: cCode,
                testCases: currentTestCases,
                formatted: formatted
            });
        });

        window.appData = generatedJSON;
        // console.log("Generated JSON:", JSON.stringify(generatedJSON, null, 2));
        return generatedJSON;
    } catch (e) {
        console.error("Initialization Error:", e);
        throw e;
    }
}

// --- Router ---
const BASE_PATH = "";

const navigateTo = url => {
    // If URL is absolute, append BASE_PATH
    const fullUrl = url.startsWith('/') ? BASE_PATH + url : url;
    try {
        if (window.location.protocol === 'file:' || window.location.hash.startsWith('#/')) {
            throw new Error('Use Hash Routing');
        }
        history.pushState(null, null, fullUrl);
    } catch (err) {
        window.location.hash = url;
        return;
    }
    router();
};

const router = async () => {
    const routes = [
        { path: /^\/?$/, view: viewCompiler },
        { path: /^\/subjects\/?$/, view: viewSubjectsList },
        { path: /^\/subjects\/spl-lab\/?$/, view: viewSplLab },
        { path: /^\/subjects\/spl-lab\/q-(\d+)\/?$/, view: viewQuestion },
        { path: /^\/login\/?$/, view: viewLogin }
    ];

    let currentPath = location.pathname;
    
    // Hash fallback support
    if (location.hash && location.hash.startsWith('#/')) {
        currentPath = location.hash.substring(1);
    } else if (BASE_PATH && currentPath.startsWith(BASE_PATH)) {
        currentPath = currentPath.substring(BASE_PATH.length);
    }
    
    if (currentPath === '') currentPath = '/';

    const isLoggedIn = appState.isAuthenticated;

    if (!isLoggedIn && currentPath !== '/login') {
        navigateTo('/login');
        return;
    }

    let match = routes.find(r => r.path.test(currentPath));

    if (!match) {
        match = { path: /^\/?$/, view: viewCompiler }; // 404 fallback
    }

    const appRoot = document.getElementById('app-root');
    appRoot.innerHTML = '<div class="loading" style="padding: 2rem;">Loading view...</div>';
    
    updateNavUI(currentPath);

    try {
        await match.view(currentPath);
    } catch (e) {
        appRoot.innerHTML = `<div class="error" style="padding: 2rem; color: red;">Error loading page: ${e.message}</div>`;
    }
};

window.addEventListener("popstate", router);
window.addEventListener("hashchange", router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        // Handle SPA navigation
        const link = e.target.closest("[data-link]");
        if (link) {
            e.preventDefault();
            navigateTo(link.getAttribute("href"));
        }
    });
    router();
});

function updateNavUI(path) {
    const nav = document.getElementById('main-nav') || document.querySelector('.navbar');
    if (!nav) return;
    
    if (path === '/login') {
        nav.style.display = 'none';
        return;
    }
    nav.style.display = 'flex';

    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    if (path === '/' || path === '') {
        document.querySelector('a[href="/"]').classList.add('active');
    } else if (path.startsWith('/subjects')) {
        document.querySelector('a[href="/subjects"]').classList.add('active');
    }
}

// --- Modals ---
window.showModal = function(title, text, type = 'info') {
    const root = document.getElementById('modal-root');
    const color = type === 'success' ? '#10b981' : (type === 'error' ? '#ef4444' : '#0ea5e9');
    const html = `
        <div class="cyber-overlay" id="cyber-overlay">
            <div class="cyber-modal" style="border-top: 4px solid ${color};">
                <h3 style="color: ${color}; margin-bottom: 1rem; font-family: monospace; font-size: 1.5rem; letter-spacing: 1px;">[${title}]</h3>
                <p style="color: #e5e7eb; margin-bottom: 2rem; line-height: 1.6; font-size: 1.1rem;">${text.replace(/\n/g, '<br>')}</p>
                <button class="btn" style="background: ${color}; width: 100%; font-weight: bold; letter-spacing: 2px;" onclick="document.getElementById('modal-root').innerHTML=''">ACKNOWLEDGE</button>
            </div>
        </div>
    `;
    root.innerHTML = html;
};

// --- Views ---
async function viewLogin() {
    const html = `
        <div class="login-view">
            <div class="login-container cyber-container">
                <div class="cyber-header">
                    <h1 class="glitch-text">FIREWALL_ACTIVE</h1>
                    <p class="subtitle">UNAUTHORIZED ACCESS DETECTED</p>
                </div>
                
                <div class="login-box" id="login-box">
                    <input type="text" id="login-user" placeholder="USERNAME" autocomplete="off">
                    <input type="password" id="login-pass" placeholder="PASSWORD" autocomplete="off">
                </div>

                <div class="game-area" id="game-area" style="display: none;">
                    <div class="matrix-header">MEMORY OVERRIDE REQUIRED. INITIATING...</div>
                    <div class="matrix-grid" id="matrix-grid">
                        ${Array.from({length: 16}).map((_, i) => `<div class="matrix-node" data-index="${i}"></div>`).join('')}
                    </div>
                    <div class="matrix-status" id="matrix-status">AWAITING SEQUENCE...</div>
                </div>
                
                <button class="btn cyber-btn-primary" id="breach-btn">BREACH FIREWALL</button>
                <button class="btn cyber-btn-secondary" onclick="showModal('COMMUNICATION_LINK', 'Contribute assignments directly to encrypted comms channel:\\n\\nWhatsApp: 01515265393', 'info')">CONTRIBUTE ASSIGNMENTS</button>
            </div>
        </div>
    `;
    document.getElementById('app-root').innerHTML = html;

    const uInput = document.getElementById('login-user');
    const pInput = document.getElementById('login-pass');
    const breachBtn = document.getElementById('breach-btn');
    const gameArea = document.getElementById('game-area');

    let sequence = [];
    let playerSequence = [];
    let isPlaying = false;
    let sequenceLength = 5;
    let firewallBreached = false;

    breachBtn.addEventListener('click', () => {
        breachBtn.style.display = 'none';
        gameArea.style.display = 'flex';
        // Need to query nodes AFTER game area is revealed
        const nodes = document.querySelectorAll('.matrix-node');
        const status = document.getElementById('matrix-status');

        const startSequence = async () => {
            isPlaying = true;
            playerSequence = [];
            sequence = [];
            status.textContent = 'MEMORIZE SEQUENCE';
            status.style.color = '#0ea5e9';

            let lastNode = -1;
            for (let i = 0; i < sequenceLength; i++) {
                let nextNode;
                do { nextNode = Math.floor(Math.random() * 16); } while (nextNode === lastNode);
                sequence.push(nextNode);
                lastNode = nextNode;
            }

            for (let i = 0; i < sequence.length; i++) {
                await new Promise(r => setTimeout(r, 500));
                const node = nodes[sequence[i]];
                node.classList.add('flash');
                await new Promise(r => setTimeout(r, 400));
                node.classList.remove('flash');
            }

            status.textContent = 'INPUT SEQUENCE';
            status.style.color = '#10b981';
            isPlaying = false;
        };

        nodes.forEach(node => {
            node.addEventListener('click', () => {
                if (isPlaying) return;
                const idx = parseInt(node.getAttribute('data-index'));
                node.classList.add('flash-player');
                setTimeout(() => node.classList.remove('flash-player'), 200);

                playerSequence.push(idx);

                if (playerSequence[playerSequence.length - 1] !== sequence[playerSequence.length - 1]) {
                    status.textContent = 'BREACH FAILED. RETRYING...';
                    status.style.color = '#ef4444';
                    gameArea.classList.add('shake');
                    setTimeout(() => gameArea.classList.remove('shake'), 500);
                    isPlaying = true;
                    setTimeout(startSequence, 1500);
                    return;
                }

                if (playerSequence.length === sequence.length) {
                    status.textContent = 'OVERRIDE SUCCESSFUL';
                    status.style.color = '#10b981';
                    isPlaying = true;
                    firewallBreached = true;
                    setTimeout(() => {
                        showModal('DECRYPTION SUCCESSFUL', 'Firewall breached. Credentials recovered.\\n\\nUSER: tg\\nPASS: 404', 'success');
                        gameArea.style.display = 'none';
                    }, 500);
                }
            });
        });

        setTimeout(startSequence, 1000);
    });

    const tryLogin = () => {
        if (uInput.value === 'tg' && pInput.value === '404') {
            appState.isAuthenticated = true;
            navigateTo('/');
        }
    };
    
    uInput.addEventListener('input', tryLogin);
    pInput.addEventListener('input', tryLogin);
}

async function viewCompiler() {
    const html = `
        <div class="view active-view" id="compiler-section">
            <div class="compiler-header">
                <h2>Online Compiler</h2>
                <div class="controls">
                    <select id="compiler-select">
                        <option value="gcc-15">C (gcc-15)</option>
                        <option value="g++-15">C++ (g++-15)</option>
                    </select>
                    <button id="run-btn" class="btn btn-blue">Run Code</button>
                </div>
            </div>
            
            <div class="editor-container">
                <div class="code-area">
                    <div id="editor" style="width: 100%; height: 100%; min-height: 400px;"></div>
                </div>
                <div class="io-area">
                    <div class="io-box">
                        <h3>Input (stdin)</h3>
                        <textarea id="stdin-input" placeholder="Enter input here..."></textarea>
                    </div>
                    <div class="io-box">
                        <h3>Output <span id="run-status"></span></h3>
                        <div id="stdout-output" class="output-console"></div>
                    </div>
                </div>
            </div>
        </div>
    `;
    document.getElementById('app-root').innerHTML = html;

    // Load Monaco if not already loaded
    if (!window.require) {
        document.getElementById('editor').innerHTML = 'Monaco Editor failed to load.';
        return;
    }

    require.config({ paths: { 'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.43.0/min/vs' }});
    require(['vs/editor/editor.main'], function() {
        const savedCode = localStorage.getItem('compiler_code') || "#include <stdio.h>\n\nint main() {\n    printf(\"Hello, World!\\n\");\n    return 0;\n}";
        
        // Destroy existing instance if switching back
        if (window.monacoEditor && typeof window.monacoEditor.dispose === 'function') {
            window.monacoEditor.dispose();
        }

        window.monacoEditor = monaco.editor.create(document.getElementById('editor'), {
            value: savedCode,
            language: 'c',
            theme: 'vs-light', // Pure white background theme, syntax highlights include and strings automatically
            automaticLayout: true,
            fontSize: 14
        });

        // Setup Run Button
        const runBtn = document.getElementById('run-btn');
        const outputConsole = document.getElementById('stdout-output');
        const runStatus = document.getElementById('run-status');
        const compilerSelect = document.getElementById('compiler-select');

        runBtn.addEventListener('click', async () => {
            const code = window.monacoEditor.getValue();
            let input = document.getElementById('stdin-input').value;
            const compiler = compilerSelect.value;
            localStorage.setItem('compiler_code', code); 

            // Smart Input Detection
            if (!input.trim() && (code.includes('scanf') || code.includes('cin >>') || code.includes('gets(') || code.includes('fgets(') || code.includes('input('))) {
                const requestedInput = prompt("Your code appears to require input (e.g. scanf / cin).\n\nPlease enter the required input below before it runs:");
                if (requestedInput !== null) {
                    input = requestedInput;
                    document.getElementById('stdin-input').value = input;
                } else {
                    // User clicked cancel
                    return;
                }
            }

            runBtn.disabled = true;
            runBtn.textContent = 'Running...';
            outputConsole.textContent = 'Executing...';
            runStatus.className = '';
            runStatus.textContent = '';

            try {
                // Sending to our new Cloudflare Function proxy to bypass CORS and hide the API key securely!
                const response = await fetch("/api/run", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ compiler, code, input })
                });

                const result = await response.json();
                
                if (result.output) {
                    outputConsole.textContent = result.output;
                    runStatus.textContent = 'Success';
                    runStatus.className = 'success';
                } else if (result.error) {
                    outputConsole.textContent = result.error;
                    runStatus.textContent = 'Error';
                    runStatus.className = 'error';
                } else {
                    outputConsole.textContent = JSON.stringify(result, null, 2);
                }
            } catch (error) {
                outputConsole.textContent = `Network Error: ${error.message}`;
                runStatus.textContent = 'Failed';
                runStatus.className = 'error';
            } finally {
                runBtn.disabled = false;
                runBtn.textContent = 'Run Code';
            }
        });
    });
}

async function viewSubjectsList() {
    const html = `
        <div class="view active-view subjects-list">
            <h2>Subjects</h2>
            <div class="questions-grid" style="margin-top: 1.5rem;">
                <div class="subject-card" onclick="navigateTo('/subjects/spl-lab')">
                    <h3 style="color: var(--btn-blue); margin-bottom: 0.5rem;">SPL Lab</h3>
                    <p style="color: var(--text-secondary);">Structured Programming Language Laboratory</p>
                </div>
            </div>
        </div>
    `;
    document.getElementById('app-root').innerHTML = html;
}

async function viewSplLab() {
    const data = await initializeData();
    const html = `
        <div class="view active-view">
            <div class="breadcrumb">
                <a href="/subjects" data-link>Subjects</a> > SPL Lab
            </div>
            <div class="subjects-header" style="margin-top: 1rem;">
                <h2>SPL Lab Questions</h2>
                <div class="search-bar">
                    <input type="text" id="search-input" placeholder="Search by keyword or number...">
                </div>
            </div>
            <div id="questions-container" class="questions-grid"></div>
        </div>
    `;
    document.getElementById('app-root').innerHTML = html;

    const container = document.getElementById('questions-container');
    
    function renderList(list) {
        if (list.length === 0) {
            container.innerHTML = '<div style="color: var(--text-secondary);">No questions found.</div>';
            return;
        }
        container.innerHTML = list.map(q => `
            <div class="question-card" onclick="navigateTo('/subjects/spl-lab/q-${q.id}')">
                <div class="q-header">
                    <div>
                        <div class="q-title">${q.title}</div>
                        <div class="q-desc" style="margin-top: 0.5rem; color: var(--text-secondary);">${q.question}</div>
                    </div>
                    <button class="btn btn-blue" onclick="event.stopPropagation(); navigateTo('/subjects/spl-lab/q-${q.id}')">View Details</button>
                </div>
            </div>
        `).join('');
    }

    renderList(data);

    document.getElementById('search-input').addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const filtered = data.filter(q => 
            q.title.toLowerCase().includes(term) || 
            q.question.toLowerCase().includes(term) ||
            q.id.toString().includes(term)
        );
        renderList(filtered);
    });
}

async function viewQuestion(path) {
    const data = await initializeData();
    const match = path.match(/^\/subjects\/spl-lab\/q-(\d+)\/?$/);
    const id = match ? parseInt(match[1], 10) : null;
    const q = data.find(item => item.id === id);

    if (!q) {
        document.getElementById('app-root').innerHTML = `<div class="error" style="padding: 2rem;">Question not found.</div>`;
        return;
    }

    // Syntax highlighting for the solution
    const highlightCode = (code) => {
        return code
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"(.*?)"/g, '<span style="color: #059669;">"$1"</span>') // Strings
            .replace(/\b(int|float|char|double|void|return|if|else|for|while|do|switch|case|break|continue|struct|typedef|static|const|sizeof)\b/g, '<span style="color: #2563eb; font-weight: bold;">$1</span>') // Keywords
            .replace(/(#include|#define|#ifdef|#ifndef|#endif)/g, '<span style="color: #7c3aed; font-weight: bold;">$1</span>') // Preprocessor
            .replace(/(&lt;.*?&gt;)/g, '<span style="color: #d97706;">$1</span>') // Headers
            .replace(/(\/\/.*)/g, '<span style="color: #9ca3af; font-style: italic;">$1</span>'); // Comments
    };

    const testCasesHTML = q.testCases.map((tc, i) => `
        <div class="test-case-item">
            <div class="tc-label">Sample Case ${i + 1}</div>
            <div class="tc-grid">
                <div class="tc-box">
                    <div class="tc-box-header">
                        <span>Input</span>
                        <button class="btn-copy-small js-copy-btn" data-copy-type="input" data-case-index="${i}">Copy</button>
                    </div>
                    <pre class="tc-content">${tc.input}</pre>
                </div>
                <div class="tc-box">
                    <div class="tc-box-header">
                        <span>Output</span>
                        <button class="btn-copy-small js-copy-btn" data-copy-type="output" data-case-index="${i}">Copy</button>
                    </div>
                    <pre class="tc-content">${tc.output}</pre>
                </div>
            </div>
        </div>
    `).join('');

    const html = `
        <div class="view active-view question-detail-view">
            <div class="breadcrumb">
                <a href="/subjects" data-link>Subjects</a> &gt; 
                <a href="/subjects/spl-lab" data-link>SPL Lab</a> &gt; 
                ${q.title}
            </div>
            
            <div class="q-detail-container">
                <div class="q-main-header">
                    <div class="q-title-group">
                        <span class="q-id-badge">#${q.id}</span>
                        <h2>${q.title}</h2>
                    </div>
                    <div class="q-actions">
                        <button class="btn btn-blue" id="btn-run-compiler">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                            Run Code
                        </button>
                        <button class="btn btn-red" id="btn-download-pdf">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                            PDF
                        </button>
                    </div>
                </div>

                <section class="q-section">
                    <h3 class="section-title">Problem Statement</h3>
                    <div class="q-statement card">
                        ${q.question}
                    </div>
                </section>

                <section class="q-section">
                    <h3 class="section-title">Sample Test Cases</h3>
                    <div class="test-cases-container">
                        ${testCasesHTML}
                    </div>
                </section>

                <section class="q-section">
                    <div class="section-header-row">
                        <h3 class="section-title">Sample Solution (C)</h3>
                        <button class="btn-copy-small js-copy-btn" data-copy-type="solution">Copy Solution</button>
                    </div>
                    <div class="solution-box card">
                        <pre class="code-highlight">${highlightCode(q.solution)}</pre>
                    </div>
                </section>
            </div>
        </div>
    `;
    document.getElementById('app-root').innerHTML = html;

    // Attach Event Listeners for Copy Buttons
    document.querySelectorAll('.js-copy-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const type = btn.getAttribute('data-copy-type');
            let text = "";
            if (type === 'solution') {
                text = q.solution;
            } else {
                const idx = parseInt(btn.getAttribute('data-case-index'));
                text = q.testCases[idx][type];
            }
            
            navigator.clipboard.writeText(text).then(() => {
                const originalText = btn.textContent;
                btn.textContent = 'Copied!';
                btn.classList.add('copied');
                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.classList.remove('copied');
                }, 2000);
            });
        });
    });

    document.getElementById('btn-run-compiler').addEventListener('click', () => {
        localStorage.setItem('compiler_code', q.solution); 
        navigateTo('/');
    });

    document.getElementById('btn-download-pdf').addEventListener('click', () => {
        const jsPDFLib = window.jspdf ? window.jspdf.jsPDF : window.jsPDF;
        if (!jsPDFLib) {
            alert('PDF library (jsPDF) failed to load. Please check your connection or refresh.');
            return;
        }
        
        const doc = new jsPDFLib();
        
        doc.setFontSize(16);
        doc.setTextColor(37, 99, 235);
        doc.text(q.title, 14, 20);
        
        doc.setFontSize(12);
        doc.setTextColor(31, 41, 55);
        const splitDesc = doc.splitTextToSize(q.question, 180);
        doc.text(splitDesc, 14, 30);
        
        doc.setFontSize(10);
        doc.setTextColor(75, 85, 99);
        const splitCode = doc.splitTextToSize(q.formatted, 180);
        
        let y = 35 + (splitDesc.length * 6);
        let pageHeight = doc.internal.pageSize.height;
        
        for (let i = 0; i < splitCode.length; i++) {
            if (y > pageHeight - 20) {
                doc.addPage();
                y = 20;
            }
            doc.text(splitCode[i], 14, y);
            y += 5;
        }
        
        doc.save(`${q.title.replace(' ', '_')}.pdf`);
    });
}
