export async function getActivtiesGallery() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL2}/activitiesgalleries?populate=*`
    );
    if (!res.ok) throw new Error("Failed to fetch data");
  
    return res.json();
  }

  export async function getStaffGallery() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL2}/staffgalleries?populate=*`
    );
    if (!res.ok) throw new Error("Failed to fetch data");
  
    return res.json();
  }

  export async function getBarsRestaurantsGallery() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL2}/restaurantsbarsgalleries?populate=*`
    );
    if (!res.ok) throw new Error("Failed to fetch data");
  
    return res.json();
  }

  export async function getFlyersGallery() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL2}/flyersgalleries?populate=*`
    );
    if (!res.ok) throw new Error("Failed to fetch data");
  
    return res.json();
  }
  
  export async function getMenusGallery() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL2}/restaurantmenugalleries?populate=*`
    );
    if (!res.ok) throw new Error("Failed to fetch data");
  
    return res.json();
  }

