# Multi-Tenant Sales Dashboard (Frontend)

This project is a frontend-only simulation of a multi-tenant SaaS sales dashboard.
It demonstrates tenant isolation, role-based access control, and modular frontend
architecture using React.

## Features
- Multi-tenant support (Org A, Org B)
- Role-based access (Admin, Agent)
- Tenant-specific Leads and Call Logs
- Admin-only actions
- Modular, scalable folder structure
- Clean, modern UI using Tailwind CSS
- Mocked authentication and data (no backend)

## Tech Stack
- React + TypeScript
- React Router DOM
- Tailwind CSS
- Vite

## Notes on Optimization
- Component-based modular structure
- Context API for tenant and auth state
- Reusable modules across tenants
- Prepared for lazy loading and code splitting if scaled

## Running Locally
```bash
npm install
npm run dev
