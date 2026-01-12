#!/bin/bash

# UB Greensfelder CMO Demo - Quick Deploy Script
# This script helps you deploy the demo to Vercel

echo "================================================"
echo "  UB Greensfelder CMO Demo - Deployment Script  "
echo "================================================"
echo ""

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "Vercel CLI not found. Installing..."
    npm install -g vercel
    echo ""
fi

echo "Deploying to Vercel..."
echo ""

# Deploy to Vercel
vercel --prod

echo ""
echo "================================================"
echo "  Deployment Complete!                          "
echo "================================================"
echo ""
echo "Your demo is now live. Share the URL with the"
echo "UB Greensfelder interview team."
echo ""
