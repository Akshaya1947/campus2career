# Companies Database Integration

This document explains how to migrate company data from the static file to MongoDB.

## Changes Made

### Backend (server/)
1. **Modified `server.js`**
   - Added `Company` MongoDB schema and model
   - Added 6 new API endpoints:
     - `GET /api/companies` - Fetch all companies (public)
     - `GET /api/companies/:id` - Fetch a single company (public)
     - `POST /api/admin/companies` - Create a company (admin only)
     - `PUT /api/admin/companies/:id` - Update a company (admin only)
     - `DELETE /api/admin/companies/:id` - Delete a company (admin only)
     - `POST /api/admin/companies/seed` - Seed initial data (admin only)

2. **Created `companies-data.js`**
   - Contains the initial companies data (TCS, Cognizant, Accenture, Wipro, Soliton)
   - This data will be seeded into MongoDB

3. **Created `seed-companies.js`**
   - A Node.js script to seed companies data into MongoDB
   - Prevents duplicate seeding if companies already exist

### Frontend (src/)
1. **Created `services/companyService.js`**
   - Service for communicating with the companies API
   - Methods: getAllCompanies(), getCompanyById(), createCompany(), updateCompany(), deleteCompany(), seedCompanies()

2. **Updated `pages/CompanyMatrixPage.jsx`**
   - Changed from importing `getActiveCompanies()` to using `companyService.getAllCompanies()`
   - Added loading state for companies fetching

3. **Updated `pages/AdminDashboard.jsx`**
   - Changed from using localStorage functions to API calls
   - Updated all company management functions to use `companyService`
   - Added async/await for API operations

## Seeding Companies Data

### Step 1: Start MongoDB
Ensure MongoDB is running on your system (default: `mongodb://127.0.0.1:27017/campus2career`)

### Step 2: Start the Server
```bash
cd server
npm install  # if not already done
npm start    # or node server.js
```

### Step 3: Seed the Companies
In a **new terminal**, run:
```bash
cd server
node seed-companies.js
```

You should see output like:
```
✅ Connected to MongoDB: mongodb://127.0.0.1:27017/campus2career
✅ Successfully seeded 5 companies into MongoDB:
   - TCS (tcs)
   - Cognizant (cognizant)
   - Accenture (accenture)
   - Wipro (wipro)
   - Soliton (soliton)
```

### Step 4: Verify Seeding
1. Open your browser and navigate to http://localhost:5000/api/companies
2. You should see all 5 companies in JSON format

## API Examples

### Get All Companies
```bash
curl http://localhost:5000/api/companies
```

### Get a Specific Company
```bash
curl http://localhost:5000/api/companies/tcs
```

### Create a New Company (requires admin token)
```bash
curl -X POST http://localhost:5000/api/admin/companies \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_ADMIN_TOKEN" \
  -d '{
    "id": "infosys",
    "name": "Infosys",
    "fullName": "Infosys Limited",
    "logoEmoji": "🏢",
    "description": "IT consulting and services",
    "ctcRange": "₹4.5 LPA – ₹9.0 LPA"
  }'
```

## How the Frontend Works

### Fetching Companies
The frontend now calls the API to fetch companies dynamically:
```javascript
const result = await companyService.getAllCompanies()
if (result.success) {
  // Use result.companies
}
```

### Admin Operations
Admins can now add/edit/delete companies through the AdminDashboard, which updates the database via API:
```javascript
const res = await companyService.createCompany(companyData)
const res = await companyService.updateCompany(companyId, updateData)
const res = await companyService.deleteCompany(companyId)
```

## Key Differences from Previous Approach

| Feature | Before (localStorage) | After (MongoDB) |
|---------|-----|---------|
| Storage | Browser localStorage | MongoDB database |
| Persistence | Per-browser only | Shared across all users |
| Scalability | Limited to localStorage size | Unlimited (database size) |
| Admin Changes | Saved to browser only | Saved to database |
| Multi-user | Each browser has own copy | Single source of truth |
| Performance | Instant local access | Network API calls |

## Troubleshooting

### MongoDB connection error
```
❌ MongoDB Connection Error: connect ECONNREFUSED
```
**Solution**: Start MongoDB with `mongod` command before running the server

### Companies already seeded
```
⚠️ Database already contains 5 companies. Skipping seed.
```
**Solution**: This is expected on subsequent runs. To reseed, drop the collection and run again:
```bash
# In MongoDB shell
db.companies.deleteMany({})
```

### API returns 401 Unauthorized
**Solution**: Ensure you're passing a valid admin token in the Authorization header

## Next Steps

1. ✅ Run `node seed-companies.js` to populate the database
2. ✅ Test the frontend to confirm companies load from the API
3. ✅ Test admin features to add/edit/delete companies
4. ✅ Optional: Update the static `companies.js` file or keep it as a reference

## Files Modified
- `/server/server.js` - Added Company schema and API routes
- `/src/services/companyService.js` - NEW service file
- `/src/pages/CompanyMatrixPage.jsx` - Updated to use API
- `/src/pages/AdminDashboard.jsx` - Updated to use API

## Files Created
- `/server/companies-data.js` - Initial companies data
- `/server/seed-companies.js` - Seed script
