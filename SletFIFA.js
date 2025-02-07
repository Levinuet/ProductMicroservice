const fs = require('fs');
const path = require('path');

// Stier til FIFA-mappen afhængigt af styresystem
const fifaPaths = [
    path.join('C:', 'Program Files', 'EA Sports FIFA'), // Windows standard
    path.join('C:', 'Program Files (x86)', 'EA Sports FIFA'), // Windows 32-bit
    path.join(process.env.HOME || '', 'Library', 'Application Support', 'FIFA'), // macOS
    path.join(process.env.HOME || '', '.fifa') // Mulig Linux-mappe
];

// Funktion til at slette en mappe rekursivt
function deleteFolder(folderPath) {
    if (fs.existsSync(folderPath)) {
        fs.rmSync(folderPath, { recursive: true, force: true });
        console.log(`✅ FIFA-mappen slettet: ${folderPath}`);
    } else {
        console.log(`❌ Ingen FIFA-mappe fundet på: ${folderPath}`);
    }
}

// Prøv at slette FIFA-mappen fra de kendte stier
fifaPaths.forEach(deleteFolder);
