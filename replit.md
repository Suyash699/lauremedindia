# Overview

This is a full-stack e-commerce application for Lauremed Organic India, a pharmaceutical company specializing in organic medicines and health products. The application is built as a modern monorepo with a React frontend and Express backend, featuring product browsing, search functionality, and shopping cart capabilities. The system uses PostgreSQL as the database with Drizzle ORM for type-safe database operations.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The client application uses React with TypeScript and is built using Vite for fast development and building. The frontend follows a component-based architecture with:

- **Routing**: Wouter for lightweight client-side routing
- **State Management**: Zustand for cart state management with persistence
- **UI Components**: Radix UI primitives with shadcn/ui design system
- **Styling**: Tailwind CSS with custom design tokens for organic/pharmaceutical theming
- **Data Fetching**: TanStack Query for server state management and caching
- **Forms**: React Hook Form with Zod validation

The component structure separates UI components, page components, and reusable business components. The app uses a custom color scheme with organic greens and pharmaceutical blues to match the company branding.

## Backend Architecture
The server is built with Express.js and TypeScript, following a RESTful API pattern:

- **Database Layer**: Drizzle ORM with PostgreSQL for type-safe database operations
- **Storage Pattern**: Abstract storage interface with in-memory implementation for development
- **API Routes**: RESTful endpoints for products, categories, specialties, and search functionality
- **Middleware**: Custom logging middleware for API request tracking
- **Development Setup**: Vite integration for serving static files in development

The backend uses a repository pattern through the storage interface, making it easy to switch between different data sources.

## Database Schema
The PostgreSQL schema includes:

- **Users**: Basic user authentication with username/password
- **Products**: Core product information with categories, specialties, and organic certifications
- **Categories**: Product categorization with product counts
- **Specialties**: Medical specialties for pharmaceutical products
- **Cart Items**: User shopping cart persistence

All tables use UUID primary keys and include proper relationships and constraints. The schema supports both organic products and pharmaceutical specialties.

## Development Workflow
The application uses a monorepo structure with shared TypeScript types between frontend and backend. The build process uses Vite for the frontend and esbuild for the backend, with separate development and production configurations.

# External Dependencies

## Database
- **PostgreSQL**: Primary database using Neon serverless PostgreSQL
- **Drizzle ORM**: Type-safe database queries and migrations
- **Drizzle Kit**: Database migration and schema management

## Frontend Libraries
- **React**: UI framework with TypeScript support
- **Vite**: Build tool and development server
- **Wouter**: Lightweight routing library
- **TanStack Query**: Server state management and data fetching
- **Zustand**: Client state management for cart functionality
- **React Hook Form**: Form handling with validation
- **Zod**: Schema validation library

## UI Framework
- **Radix UI**: Accessible component primitives
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: Pre-built component library
- **Lucide React**: Icon library

## Backend Dependencies
- **Express.js**: Web application framework
- **Neon Serverless**: PostgreSQL database driver
- **tsx**: TypeScript execution for development

## Development Tools
- **TypeScript**: Static type checking
- **ESBuild**: Fast JavaScript bundler for production
- **PostCSS**: CSS processing with Autoprefixer
- **Replit Integration**: Development environment plugins for Replit