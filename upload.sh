#!/bin/bash

# Script untuk upload wedding invitation ke GitHub
# Usage: ./upload.sh YOUR_GITHUB_USERNAME REPO_NAME

if [ -z "$1" ] || [ -z "$2" ]; then
    echo "Usage: ./upload.sh YOUR_GITHUB_USERNAME REPO_NAME"
    echo "Example: ./upload.sh johndoe akbar"
    exit 1
fi

USERNAME=$1
REPO_NAME=$2

echo "🚀 Preparing to upload to GitHub..."
echo "Repository: https://github.com/$USERNAME/$REPO_NAME"

# Update vite.config.js with correct base path
sed -i "s|base: process.env.NODE_ENV === 'production' ? '/akbar/' : '/',|base: process.env.NODE_ENV === 'production' ? '/$REPO_NAME/' : '/',|g" vite.config.js

# Initialize git if not already
if [ ! -d ".git" ]; then
    echo "📦 Initializing git repository..."
    git init
    git branch -M main
fi

# Add all files
echo "📝 Adding files..."
git add .

# Commit
echo "💾 Committing changes..."
git commit -m "Initial commit: Premium wedding invitation website" || echo "No changes to commit"

# Add remote (remove if exists, then add)
echo "🔗 Setting up remote..."
git remote remove origin 2>/dev/null
git remote add origin https://github.com/$USERNAME/$REPO_NAME.git

# Push
echo "⬆️  Pushing to GitHub..."
git push -u origin main

echo ""
echo "✅ Done! Your code has been pushed to GitHub."
echo ""
echo "📋 Next steps:"
echo "1. Go to https://github.com/$USERNAME/$REPO_NAME/settings/pages"
echo "2. Under 'Source', select 'GitHub Actions'"
echo "3. Wait for deployment to complete"
echo "4. Your website will be available at: https://$USERNAME.github.io/$REPO_NAME/"
echo ""
