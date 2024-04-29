//ACTIVITIES!!!!!!!

//Method GET
export async function getActivitiesTuesday() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL2}/activitytuesdays?pagination[page]=1&pagination[pageSize]=50`
    );
    if (!res.ok) throw new Error("Failed to fetch data");
    return res.json();
  }
  
  //Method POST
  export async function postActivitiesTuesday(data) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL2}/activitytuesdays`,
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
  export async function putActivitiesTuesday(data, id) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL2}/activitytuesdays/${id}`,
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
  export async function deleteActivitiesTuesday(id) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL2}/activitytuesdays/${id}`,
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
  export async function getStaffsTuesday() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL2}/stafftuesdays`
    );
    if (!res.ok) throw new Error("Failed to fetch data");
    return res.json();
  }
  
  //Method POST
  export async function postStaffsTuesday(data) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL2}/stafftuesdays`,
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
  export async function putStaffsTuesday(data, id) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL2}/stafftuesdays/${id}`,
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
  export async function deleteStaffsTuesday(id) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL2}/stafftuesdays/${id}`,
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
  export async function getDinningTuesday() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL2}/diningtuesdays`
    );
    if (!res.ok) throw new Error("Failed to fetch data");
    return res.json();
  }
  
  //Method PUT
  export async function putDinningTuesday(data, id) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL2}/diningtuesdays/${id}`,
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
  export async function getBreakfastTuesday() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL2}/breakfasttuesdays`
    );
    if (!res.ok) throw new Error("Failed to fetch data");
    return res.json();
  }
  
  //Method PUT
  export async function putBreakfastTuesday(data, id) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL2}/breakfasttuesdays/${id}`,
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
  
  export async function getBarsTuesday() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL2}/bartuestadies`);
    if (!res.ok) throw new Error("Failed to fetch data");
    return res.json();
  }
  
  export async function putBarsTuesday(data, id) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL2}/bartuestadies/${id}`,
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
  export async function getFlyersTuesday() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL2}/flyertuesdays`
    );
    if (!res.ok) throw new Error("Failed to fetch data");
    return res.json();
  }
  
  //Method POST
  export async function postFlyersTuesday(data) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL2}/flyertuesdays`,
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
  export async function putFlyersTuesday(data, id) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL2}/flyertuesdays/${id}`,
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
  export async function deleteFlyersTuesday(id) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL2}/flyertuesdays/${id}`,
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
  export async function getFlyersTitleTuesday() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL2}/flyertitletuesdays`
    );
    if (!res.ok) throw new Error("Failed to fetch data");
    return res.json();
  }
  

  
  //Method PUT
  export async function putFlyersTitleTuesday(data, id) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL2}/flyertitletuesdays/${id}`,
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
 