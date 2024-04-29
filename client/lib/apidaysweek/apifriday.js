//ACTIVITIES!!!!!!!

//Method GET
export async function getActivitiesFriday() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL2}/activityfridays?pagination[page]=0&pagination[pageSize]=120`
    );
    if (!res.ok) throw new Error("Failed to fetch data");
    return res.json();
  }
  
  //Method POST
  export async function postActivitiesFriday(data) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL2}/activityfridays`,
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
  export async function putActivitiesFriday(data, id) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL2}/activityfridays/${id}`,
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
  export async function deleteActivitiesFriday(id) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL2}/activityfridays/${id}`,
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
  export async function getStaffsFriday() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL2}/stafffridays`
    );
    if (!res.ok) throw new Error("Failed to fetch data");
    return res.json();
  }
  
  //Method POST
  export async function postStaffsFriday(data) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL2}/stafffridays`,
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
  export async function putStaffsFriday(data, id) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL2}/stafffridays/${id}`,
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
  export async function deleteStaffsFriday(id) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL2}/stafffridays/${id}`,
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
  export async function getDinningFriday() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL2}/diningfridays`
    );
    if (!res.ok) throw new Error("Failed to fetch data");
    return res.json();
  }
  
  //Method PUT
  export async function putDinningFriday(data, id) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL2}/diningfridays/${id}`,
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
  export async function getBreakfastFriday() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL2}/breakfastfridays`
    );
    if (!res.ok) throw new Error("Failed to fetch data");
    return res.json();
  }
  
  //Method PUT
  export async function putBreakfastFriday(data, id) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL2}/breakfastfridays/${id}`,
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
  
  export async function getBarsFriday() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL2}/barfridays`);
    if (!res.ok) throw new Error("Failed to fetch data");
    return res.json();
  }
  //Method PUT
  export async function putBarsFriday(data, id) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL2}/barfridays/${id}`,
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
  export async function getFlyersFriday() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL2}/flyerfridays`
    );
    if (!res.ok) throw new Error("Failed to fetch data");
    return res.json();
  }
  
  //Method POST
  export async function postFlyersFriday(data) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL2}/flyerfridays`,
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
  export async function putFlyersFriday(data, id) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL2}/flyerfridays/${id}`,
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
  export async function deleteFlyersFriday(id) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL2}/flyerfridays/${id}`,
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
  export async function getFlyersTitleFriday() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL2}/flyertitlefridays`
    );
    if (!res.ok) throw new Error("Failed to fetch data");
    return res.json();
  }
  
  //Method PUT
  export async function putFlyersTitleFriday(data, id) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL2}/flyertitlefridays/${id}`,
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
  