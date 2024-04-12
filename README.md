# Property Rental Website

Welcome to our Property Rental Website built with Next.js 14!

## Overview

This web application allows users to browse and search for rental properties. Users can view property details, images, location on a map, and contact the owner or agent for inquiries.

## Features

- **Authentication:** User authentication is handled using NextAuth.js, providing secure login and registration functionality.
- **Property Listings:** Browse a list of available properties with details such as price, location, and amenities.
- **Interactive Map:** View property locations on an interactive map powered by Mapbox.
- **Image Gallery:** Each property listing includes an image gallery for users to view property photos.
- **Contact Owner:** Users can contact the property owner or agent directly for inquiries about a specific property.
- **Responsive Design:** The website is optimized for various devices, providing a seamless user experience on desktop, tablet, and mobile.

## Live Demo

Check out the live demo: [Property Rental Website](https://property-rental-omega.vercel.app/)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/hritiksolanki699/property-rental.git
   ```

2. Install dependencies:

   ```bash
   cd property-rental-website
   npm install
   ```

3. Set up environment variables:

   Create a `.env.local` file in the root directory and add the following environment variables:

   ```
   NEXT_PUBLIC_MAPBOX_API_KEY=your-mapbox-api-key
   NEXTAUTH_URL=https://property-rental-omega.vercel.app
   # Add other necessary environment variables
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

## Technologies Used

- Next.js 14
- MongoDB with Mongoose
- NextAuth.js
- Cloudinary
- Mapbox
- React
- React-Map-GL
- React-PhotoSwipe-Gallery
- React-Toastify
- React-Icons
- React-Geocode
- React-Share
- React-Spinners

## Contributing

Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
