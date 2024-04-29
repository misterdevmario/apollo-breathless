//ACTIVITIES!!!!!!!

//Method GET
export async function getActivitiesSunday() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL2}/activitysundays?pagination[page]=0&pagination[pageSize]=50`
    );
    if (!res.ok) throw new Error("Failed to fetch data");
    return res.json();
  }
  
  //Method POST
  export async function postActivitiesSunday(data) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL2}/activitysundays`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    );
    res.ok ? alert("Actividad agregada exitosamente") : null;
    if (!res.ok) throw new Error("Failed to update data");
    return res.json();
  }
  //Method PUT
  export async function putActivitiesSunday(data, id) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL2}/activitysundays/${id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    );
    res.ok ? alert("Actividad actualizada exitosamente") : null;
    if (!res.ok) throw new Error("Failed to update data");
    return res.json();
  }
  
  //Method DELETE
  export async function deleteActivitiesSunday(id) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL2}/activitysundays/${id}`,
      {
        method: "DELETE",
      }
    );
    res.ok ? alert("Actividad eliminada exitosamente") : null;
    if (!res.ok) throw new Error("Failed to update data");
    return res.json();
  }
  
  //STAFF!!!!!!!
  
  //Method GET
  export async function getStaffsSunday() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL2}/staffsundays`
    );
    if (!res.ok) throw new Error("Failed to fetch data");
    return res.json();
  }
  
  //Method POST
  export async function postStaffsSunday(data) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL2}/staffsundays`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    );
    res.ok ? alert("Staff agregado exitosamente") : null;
    if (!res.ok) throw new Error("Failed to update data");
    return res.json();
  }
  
  //Method PUT
  export async function putStaffsSunday(data, id) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL2}/staffsundays/${id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    );
    res.ok ? alert("Staff actualizado exitosamente") : null;
  
    if (!res.ok) throw new Error("Failed to update data");
    return res.json();
  }
  
  //Method DELETE
  export async function deleteStaffsSunday(id) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL2}/staffsundays/${id}`,
      {
        method: "DELETE",
      }
    );
    res.ok ? alert("Staff eliminado exitosamente") : null;
    if (!res.ok) throw new Error("Failed to update data");
    return res.json();
  }
  
  //DINING!!!!!!!
  
  //Method GET
  export async function getDinningSunday() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL2}/diningsundays`
    );
    if (!res.ok) throw new Error("Failed to fetch data");
    return res.json();
  }
  
  //Method PUT
  export async function putDinningSunday(data, id) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL2}/diningsundays/${id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    );
    res.ok ? alert("Restaurante actualizado") : null;
  
    if (!res.ok) throw new Error("Failed to update data");
    return res.json();
  }
  
  //BREAKFAST!!!!!!!
  
  //Method GET
  export async function getBreakfastSunday() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL2}/breakfastsundays`
    );
    if (!res.ok) throw new Error("Failed to fetch data");
    return res.json();
  }
  
  //Method PUT
  export async function putBreakfastSunday(data, id) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL2}/breakfastsundays/${id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    );
    res.ok ? alert("Restaurante actualizado exitosamente") : null;
  
    if (!res.ok) throw new Error("Failed to update data");
    return res.json();
  }
  
  //BARS!!!!!!!
  
  //Method GET
  
  export async function getBarsSunday() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL2}/barsundays`);
    if (!res.ok) throw new Error("Failed to fetch data");
    return res.json();
  }
  
  export async function putBarsSunday(data, id) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL2}/barsundays/${id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    );
    res.ok ? alert("Bar actualizado exitosamente") : null;
    if (!res.ok) throw new Error("Failed to update data");
    return res.json();
  }
  
  //FLYERS!!!!!!!
  
  //Method GET
  export async function getFlyersSunday() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL2}/flyersundays`
    );
    if (!res.ok) throw new Error("Failed to fetch data");
    return res.json();
  }
  
  //Method POST
  export async function postFlyersSunday(data) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL2}/flyersundays`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    );
    res.ok ? alert("Flyer agregado exitosamente") : null;
    if (!res.ok) throw new Error("Failed to update data");
    return res.json();
  }
  
  //Method PUT
  export async function putFlyersSunday(data, id) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL2}/flyersundays/${id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    );
    res.ok ? alert("Flyer actualizado") : null;
    if (!res.ok) throw new Error("Failed to update data");
    return res.json();
  }
  
  //Method DELETE
  export async function deleteFlyersSunday(id) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL2}/flyersundays/${id}`,
      {
        method: "DELETE",
      }
    );
    res.ok ? alert("Flyer eliminado exitosamente") : null;
    if (!res.ok) throw new Error("Failed to update data");
    return res.json();
  }
  
  //FLYERS TITLE!!!!!!!
  
  //Method GET
  export async function getFlyersTitleSunday() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL2}/flyertitlesundays`
    );
    if (!res.ok) throw new Error("Failed to fetch data");
    return res.json();
  }
  
  //Method PUT
  export async function putFlyersTitleSunday(data, id) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL2}/flyertitlesundays/${id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    );
    res.ok ? alert("Titulo del flyer actualizado exitosamente") : null;
    if (!res.ok) throw new Error("Failed to update data");
    return res.json();
}