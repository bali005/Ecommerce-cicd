# E-Commerce CI/CD Pipeline (Agile FA2)

[![E-Commerce CI/CD Pipeline](https://github.com/bali005/Ecommerce-cicd/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/bali005/Ecommerce-cicd/actions/workflows/ci-cd.yml)

## 1. Project Overview
A lightweight Node.js E-Commerce shopping cart module built with an automated Agile CI/CD delivery pipeline.

## 2. Agile Project Plan
- **Sprint Duration:** 2 Weeks (1 Sprint)
- **Sprint Goal:** Build shopping cart operations with automated testing and continuous integration.

### User Stories
1. **US01:** As a customer, I want to add items to my cart with proper validation so that I can order products.
2. **US02:** As a customer, I want to calculate real-time totals including taxes to see my final cost.
3. **US03:** As a customer, I want to remove or clear items from the cart to adjust my selection.
4. **US04:** As a customer, I want to apply discount vouchers during checkout.

### Acceptance Criteria (US01)
- Positive quantity and valid item ID must add successfully to the cart.
- Invalid or negative values must throw a validation error.
- Cart line items and running totals must update automatically.

### Definition of Done (DoD)
- [x] Code adheres to ESLint rules with 0 lint errors (`npm run lint`).
- [x] Unit test suite passes with 100% success rate (`npm test`).
- [x] CI/CD pipeline triggers on push and passes with a green checkmark.

## 3. CI/CD Workflow Stages
`GitHub` ➔ `Build Stage` ➔ `Automated Testing Stage` ➔ `Code Quality Check` ➔ `Deployment Stage`
