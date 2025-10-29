# Contributing to Quantum Rishi

Thank you for your interest in contributing to Quantum Rishi! We welcome contributions from the community.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
- [Testing Guidelines](#testing-guidelines)
- [Commit Message Guidelines](#commit-message-guidelines)

## Code of Conduct

This project adheres to a code of conduct. By participating, you are expected to uphold this code. Please be respectful and professional in all interactions.

## Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/your-username/Quantum-Rishi.git
   cd Quantum-Rishi
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Create a branch** for your feature or fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Development Workflow

1. **Run the development server**:
   ```bash
   npm run dev
   ```
   Visit [http://localhost:3000](http://localhost:3000) to see your changes.

2. **Make your changes** following our [coding standards](#coding-standards)

3. **Run linter**:
   ```bash
   npm run lint
   ```

4. **Build the project**:
   ```bash
   npm run build
   ```

5. **Run tests** (if available):
   ```bash
   npm test
   ```

## Pull Request Process

1. **Ensure your code builds** without errors
2. **Run the linter** and fix any issues
3. **Update documentation** if needed (README, comments, etc.)
4. **Write clear commit messages** following our [commit guidelines](#commit-message-guidelines)
5. **Push your branch** to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```
6. **Open a Pull Request** against the `main` branch
7. **Fill out the PR template** with:
   - Clear description of changes
   - Related issue number (if applicable)
   - Screenshots (for UI changes)
   - Testing done

### PR Review Process

- All PRs require at least one approval from a maintainer
- Address review feedback promptly
- Keep PRs focused and reasonably sized
- Ensure CI checks pass

## Coding Standards

### TypeScript

- Use TypeScript for all new code
- Avoid `any` types - use proper type definitions
- Use interfaces for object shapes
- Export types that might be reused

### React Components

- Use functional components with hooks
- Use proper prop types/interfaces
- Follow React best practices
- Keep components focused and single-purpose
- Use meaningful component and prop names

### Styling

- Use Tailwind CSS utility classes
- Follow existing design patterns
- Ensure responsive design (mobile-first)
- Maintain accessibility (ARIA labels, semantic HTML)

### File Organization

- Place components in `/components` directory
- UI primitives go in `/components/ui`
- Utilities go in `/lib` directory
- Follow existing naming conventions

### Code Quality

- Write clean, readable code
- Add comments for complex logic
- Remove console.logs before committing (unless necessary)
- Handle errors gracefully
- Consider performance implications

## Testing Guidelines

- Write tests for new features and bug fixes
- Ensure existing tests pass
- Test edge cases and error conditions
- Follow existing test patterns

## Commit Message Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

### Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, semicolons, etc.)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Build process or auxiliary tool changes
- `ci`: CI/CD changes

### Examples

```
feat(hero): add call-to-action buttons

Add primary and secondary CTA buttons to the hero section
with proper hover states and animations.

Closes #123
```

```
fix(navigation): correct mobile menu z-index

The mobile menu was appearing behind other elements.
Increased z-index to ensure proper layering.
```

```
docs(readme): update installation instructions

Added Node.js version requirement and troubleshooting section.
```

## Questions?

- Open an issue for bugs or feature requests
- Reach out via email: hello@quantumrishi.com
- Join our community on Telegram: @quantumrishi

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to Quantum Rishi! 🚀
