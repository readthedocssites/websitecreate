# Trezor Documentation

This repository contains the source files for the Trezor documentation site hosted on ReadTheDocs.org.

## Getting Started

### Prerequisites

- Python 3.7 or higher
- pip

### Installation

1. Clone this repository
2. Install the required packages:

```bash
pip install -r requirements.txt
```

### Building the Documentation Locally

```bash
cd docs
make html
```

The built documentation will be in `docs/_build/html`.

## Structure

- `docs/`: Main documentation source files
  - `index.rst`: Home page
  - `getting-started/`: Getting started guides
  - `guides/`: How-to guides and tutorials
  - `products/`: Product information
  - `support/`: Support resources
  - `_static/`: Static files (CSS, JavaScript, images)
  - `_templates/`: Custom Sphinx templates
  - `conf.py`: Sphinx configuration file

## Contributing

1. Fork this repository
2. Create a new branch
3. Make your changes
4. Submit a pull request

## Deploying to ReadTheDocs

This documentation is automatically built and deployed to ReadTheDocs.org when changes are pushed to the repository.

To manually trigger a build:

1. Go to your ReadTheDocs dashboard
2. Select the project
3. Click "Build version"

## License

This project is licensed under the MIT License - see the LICENSE file for details.