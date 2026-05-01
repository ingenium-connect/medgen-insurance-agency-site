#!/bin/bash

# Med-Gen Insurance - Logo Setup Script
# This script helps you prepare logo files for the website

echo "🎨 Med-Gen Insurance - Logo Setup Helper"
echo "========================================"
echo ""

# Check if ImageMagick is installed
if ! command -v convert &> /dev/null; then
    echo "⚠️  ImageMagick not found. Install it first:"
    echo "   macOS: brew install imagemagick"
    echo "   Ubuntu: sudo apt-get install imagemagick"
    echo "   Windows: Download from https://imagemagick.org/script/download.php"
    echo ""
    echo "Or use online tools: https://realfavicongenerator.net/"
    exit 1
fi

echo "✅ ImageMagick found!"
echo ""

# Ask for source logo file
read -p "Enter the path to your main logo file (e.g., ~/Downloads/logo.png): " SOURCE_LOGO

if [ ! -f "$SOURCE_LOGO" ]; then
    echo "❌ File not found: $SOURCE_LOGO"
    exit 1
fi

echo "✅ Source logo found: $SOURCE_LOGO"
echo ""

# Get the directory of this script
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
PUBLIC_DIR="$SCRIPT_DIR/public"

echo "📁 Output directory: $PUBLIC_DIR"
echo ""

# Create public directory if it doesn't exist
mkdir -p "$PUBLIC_DIR"

echo "🔄 Generating favicon files..."

# Generate favicons
convert "$SOURCE_LOGO" -resize 16x16 "$PUBLIC_DIR/favicon-16x16.png"
echo "  ✓ favicon-16x16.png"

convert "$SOURCE_LOGO" -resize 32x32 "$PUBLIC_DIR/favicon-32x32.png"
echo "  ✓ favicon-32x32.png"

convert "$SOURCE_LOGO" -define icon:auto-resize=32,16 "$PUBLIC_DIR/favicon.ico"
echo "  ✓ favicon.ico"

convert "$SOURCE_LOGO" -resize 180x180 "$PUBLIC_DIR/apple-touch-icon.png"
echo "  ✓ apple-touch-icon.png"

convert "$SOURCE_LOGO" -resize 192x192 "$PUBLIC_DIR/logo-192.png"
echo "  ✓ logo-192.png"

convert "$SOURCE_LOGO" -resize 512x512 "$PUBLIC_DIR/logo-512.png"
echo "  ✓ logo-512.png"

# Copy main logo
cp "$SOURCE_LOGO" "$PUBLIC_DIR/logo.png"
echo "  ✓ logo.png"

echo ""
echo "✅ All favicon files generated successfully!"
echo ""
echo "📋 Next steps:"
echo "   1. Copy your medgen.png, medgen-text.png, med-gen-logo.png to $PUBLIC_DIR"
echo "   2. Create Open Graph images (1200x630) for social media:"
echo "      - og-image.png (homepage)"
echo "      - og-medical.png (medical insurance page)"
echo "      - og-general.png (general insurance page)"
echo "      - og-about.png (about page)"
echo ""
echo "   Use Canva or similar tools: https://www.canva.com/"
echo ""
echo "🚀 Once all files are in place, restart your dev server!"
