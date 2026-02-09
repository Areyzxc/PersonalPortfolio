# 🚀 Git Workflow Guide

A comprehensive guide for managing your Personal Portfolio project with Git. This document covers the common cycle from making changes to pushing code to the repository.

---

## 📋 Table of Contents

1. [Basic Git Setup](#basic-git-setup)
2. [Standard Development Cycle](#standard-development-cycle)
3. [Common Commands Reference](#common-commands-reference)
4. [Tips & Best Practices](#tips--best-practices)
5. [Troubleshooting](#troubleshooting)
6. [Advanced Workflows](#advanced-workflows)

---

## Basic Git Setup

### First-Time Configuration

```bash
# Configure your Git identity
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Verify configuration
git config --global user.name
git config --global user.email
```

### Clone the Repository

```bash
# Navigate to your projects directory
cd c:\xampp\htdocs

# Clone the repository
git clone https://github.com/Areyzxc/PersonalPortfolio.git

# Navigate into the project
cd personal-portfolio
```

---

## Standard Development Cycle

### ✅ Step 1: Check Repository Status

Always start by checking what files have changed:

```bash
git status
```

**What you'll see:**
- `On branch main` - Current branch
- `Changes not staged for commit:` - Modified files
- `Untracked files:` - New files not added to Git
- `nothing to commit, working tree clean` - Everything committed

### ✅ Step 2: Review Changes (Optional but Recommended)

See exactly what changed in your files:

```bash
# View changes for all modified files
git diff

# View changes for a specific file
git diff src/components/Navigation.tsx

# View changes that are already staged
git diff --staged
```

### ✅ Step 3: Stage Changes

Add files you want to commit:

```bash
# Add ALL modified files
git add .

# Add specific files
git add src/components/Navigation.tsx
git add app/globals.css

# Add multiple specific files
git add src/components/Navigation.tsx src/data/galleryData.ts

# Add all files EXCEPT certain ones
git add . --force  # Be careful with this!
```

### ✅ Step 4: Verify Staged Changes

Confirm what's ready to commit:

```bash
git status
```

**Expected output:**
```
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        modified:   src/components/Navigation.tsx
        modified:   app/globals.css
```

### ✅ Step 5: Commit Changes

Create a commit with a descriptive message:

```bash
# Simple commit
git commit -m "fix: update navbar styling"

# Multi-line commit (more detailed)
git commit -m "fix: update navbar styling

- Changed navbar height from 64px to 80px
- Improved mobile menu animation timing
- Adjusted z-index for better layering"
```

**Commit Message Format (Recommended):**
```
<type>(<scope>): <subject>

<body (optional)>

<footer (optional)>
```

**Types:**
- `feat:` - New feature
- `fix:` - Bug fix
- `style:` - CSS/styling changes
- `refactor:` - Code restructuring
- `perf:` - Performance improvements
- `docs:` - Documentation updates
- `chore:` - Build process, dependencies

**Examples:**
```bash
git commit -m "feat: add modal portal implementation"
git commit -m "fix: remove CSS stacking context issue"
git commit -m "style: update button hover effects"
git commit -m "refactor: simplify scroll handler logic"
```

### ✅ Step 6: Push to GitHub

Upload your commits to the repository:

```bash
# Push to main branch (most common)
git push origin main

# Push to a specific branch
git push origin feature-branch-name

# Force push (USE WITH CAUTION!)
git push origin main --force
```

**After pushing:**
- GitHub automatically triggers Vercel deployment
- Your site updates at: https://areyzxc-personal-portfolio.vercel.app
- Check Vercel dashboard for deployment status

---

## Complete Workflow Example

Here's a real-world example of the complete cycle:

```bash
# 1. Start in your project directory
cd c:\xampp\htdocs\personal-portfolio

# 2. Check what changed
git status

# 3. See the changes in detail
git diff

# 4. Stage all changes
git add .

# 5. Verify staging
git status

# 6. Commit with a clear message
git commit -m "fix: improve mobile navbar scroll positioning

- Use getBoundingClientRect() instead of offsetTop
- Add 150ms delay for menu close animation
- Implement requestAnimationFrame for better mobile support
- Fixes race condition causing incorrect scroll positions"

# 7. Push to GitHub
git push origin main

# 8. Verify push was successful
git log --oneline -5  # Show last 5 commits
```

---

## Common Commands Reference

### Checking History

```bash
# View recent commits
git log

# View last 5 commits (one line each)
git log --oneline -5

# View commits with author and date
git log --pretty=format:"%h %an %ar: %s"

# View commits for a specific file
git log src/components/Navigation.tsx

# View commits between dates
git log --since="2 weeks ago"
```

### Undoing Changes

```bash
# Unstage a file (remove from staging area)
git restore --staged src/components/Navigation.tsx

# Discard changes in a file (revert to last commit)
git restore src/components/Navigation.tsx

# Undo the last commit (keep changes)
git reset --soft HEAD~1

# Undo the last commit (discard changes)
git reset --hard HEAD~1

# View what was in a previous commit
git show HEAD~1:src/components/Navigation.tsx
```

### Branching

```bash
# Create a new branch
git branch feature-new-section

# Switch to a branch
git checkout feature-new-section

# Create and switch to a new branch (shortcut)
git checkout -b feature-new-section

# List all branches
git branch -a

# Delete a branch
git branch -d feature-new-section

# Merge a branch into main
git checkout main
git merge feature-new-section
```

### Remote Operations

```bash
# View remote repositories
git remote -v

# Add a new remote
git remote add origin https://github.com/Areyzxc/PersonalPortfolio.git

# Update from remote without merging
git fetch origin

# Pull latest changes from remote
git pull origin main

# Check if there are unpushed commits
git log --branches --not --remotes
```

---

## Tips & Best Practices

### 📝 Commit Messages

✅ **Good commit messages:**
```
✅ feat: add modal portal implementation for better positioning
✅ fix: resolve localStorage quota exceeded error
✅ style: update button hover effects and transitions
✅ refactor: simplify navigation scroll handler
```

❌ **Bad commit messages:**
```
❌ update
❌ fixed stuff
❌ changes
❌ asdf
```

### 🔄 Daily Workflow Tips

1. **Commit frequently** - Small, focused commits are easier to review and revert if needed
2. **Use descriptive messages** - Future you will thank present you
3. **Test before pushing** - Run `npm run build` before committing
4. **Pull before working** - Get latest changes: `git pull origin main`
5. **Push at end of day** - Don't leave work uncommitted

### 🛡️ Before Pushing

```bash
# Always verify the build works
npm run build

# Check what you're about to push
git log --oneline -3

# See exactly what's in the commits
git diff origin/main
```

### 💾 Stashing Changes

If you need to temporarily save changes without committing:

```bash
# Save changes temporarily
git stash

# List stashed changes
git stash list

# Apply most recent stash
git stash pop

# Apply specific stash
git stash apply stash@{0}

# Delete stash
git stash drop
```

---

## Troubleshooting

### ❌ Problem: "Your branch is ahead of 'origin/main' by X commits"

**Solution:** Push your commits
```bash
git push origin main
```

### ❌ Problem: Changes won't stage

**Solution:** Check if file is ignored in `.gitignore`
```bash
# Check which files are ignored
git check-ignore -v src/file.tsx

# Force add an ignored file
git add -f src/file.tsx
```

### ❌ Problem: Wrong file committed

**Solution:** Unstage and fix
```bash
# Unstage the file
git restore --staged wrong-file.tsx

# Discard changes in wrong file
git restore wrong-file.tsx

# Stage correct files
git add correct-file.tsx

# Commit again
git commit -m "fix: correct file"
```

### ❌ Problem: Accidentally committed to wrong branch

**Solution:** Reset and switch branches
```bash
# Undo last commit (keep changes)
git reset --soft HEAD~1

# Switch to correct branch
git checkout correct-branch

# Commit in correct branch
git commit -m "fix: description"
```

### ❌ Problem: Want to see what changed in a commit

**Solution:** View specific commit
```bash
# Show commit details
git show <commit-hash>

# Example:
git show 1cc5d56
```

---

## Advanced Workflows

### 🔀 Feature Branch Workflow (Recommended for larger changes)

```bash
# 1. Create feature branch from main
git checkout main
git pull origin main
git checkout -b feature/new-modal

# 2. Make changes and commit
git add .
git commit -m "feat: new modal component"
git commit -m "style: add modal styling"

# 3. Push feature branch
git push origin feature/new-modal

# 4. Create Pull Request on GitHub (optional)
# Go to GitHub and create PR

# 5. Merge when ready
git checkout main
git pull origin main
git merge feature/new-modal
git push origin main

# 6. Delete feature branch
git branch -d feature/new-modal
git push origin --delete feature/new-modal
```

### 🔄 Keeping Up with Remote

```bash
# Fetch latest without merging
git fetch origin

# See what's new on main
git log main..origin/main

# If behind, update local main
git pull origin main
```

### 📊 Viewing Repository Information

```bash
# Show repository details
git remote show origin

# Count commits by author
git shortlog -sn

# Show file edit history
git log --follow -p src/components/Navigation.tsx

# Show blame (who changed each line)
git blame src/components/Navigation.tsx
```

---

## Quick Reference Sheet

### Essential Commands for Daily Use

| Command | Purpose |
|---------|---------|
| `git status` | Check what changed |
| `git diff` | See detailed changes |
| `git add .` | Stage all changes |
| `git commit -m "message"` | Create commit |
| `git push origin main` | Push to GitHub |
| `git log --oneline -5` | View recent commits |
| `git pull origin main` | Get latest changes |

### Emergency Commands

| Command | Purpose |
|---------|---------|
| `git restore --staged file` | Unstage file |
| `git restore file` | Discard local changes |
| `git reset --soft HEAD~1` | Undo last commit (keep changes) |
| `git stash` | Temporarily save changes |
| `git stash pop` | Restore stashed changes |

---

## Deployment Pipeline

### Your Workflow → GitHub → Vercel → Live Site

```
1. Edit files locally
   ↓
2. npm run build (verify it works)
   ↓
3. git add . && git commit -m "description"
   ↓
4. git push origin main
   ↓
5. GitHub receives push
   ↓
6. Vercel automatically deploys
   ↓
7. Site updates at areyzxc-personal-portfolio.vercel.app
   ↓
8. Check Vercel dashboard for deployment status
```

---

## Pro Tips 🎯

1. **Use Git aliases for speed:**
   ```bash
   git config --global alias.co checkout
   git config --global alias.br branch
   git config --global alias.ci commit
   git config --global alias.st status
   
   # Now you can use: git st, git co main, etc.
   ```

2. **Auto-complete branch names:**
   - Most terminals support tab completion after typing `git checkout f` + TAB

3. **Keep commits atomic:**
   - One logical change per commit
   - Easy to understand why the change was made

4. **Use meaningful branch names:**
   - `feature/dark-mode`, `fix/navbar-scroll`, `style/button-hover`
   - Avoid: `test`, `temp`, `update`

5. **Check before pushing:**
   ```bash
   # See what you're about to push
   git log origin/main..HEAD
   ```

---

## Resources

- [Git Official Documentation](https://git-scm.com/doc)
- [GitHub Help](https://docs.github.com)
- [Vercel Documentation](https://vercel.com/docs)
- [Conventional Commits](https://www.conventionalcommits.org/)

---

## Quick Start Cheat Sheet

```bash
# After making changes to files:

# 1. Check status
git status

# 2. Stage changes
git add .

# 3. Verify build works
npm run build

# 4. Commit with clear message
git commit -m "fix: description of what you changed"

# 5. Push to GitHub
git push origin main

# That's it! Vercel will auto-deploy your changes 🚀
```

---

**Last Updated:** February 9, 2026  
**Project:** Personal Portfolio  
**Repository:** https://github.com/Areyzxc/PersonalPortfolio
