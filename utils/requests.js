const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

// fetch all properties
async function fetchProperties() {
  try {
    //handle the case where the domain is not available yet.
    if (!apiDomain) {
      return [];
    }

    const res = await fetch(`${apiDomain}/properties`);
    if (!res.ok) {
      throw new Error("Could not fetch properties");
    }
    return res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}

// Fetch a single property
async function fetchProperty(id) {
  try {
    // Handle the case when the domain is not available yet
    if (!apiDomain) {
      return null;
    }

    const res = await fetch(`${apiDomain}/properties/${id}`);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetching property:", error);
    return null;
  }
}

export { fetchProperties, fetchProperty };
