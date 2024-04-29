//ACTIVITIES!!!!!!!

//Method GET
export async function getActivitiesWednesday() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL2}/activitywednesdays?pagination[page]=1&pagination[pageSize]=50`
    );
    if (!res.ok) throw new Error("Failed to fetch data");
    return res.json();
  }
  
  //Method POST
  export async function postActivitiesWednesday(data) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL2}/activitywednesdays`,
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
  export async function putActivitiesWednesday(data, id) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL2}/activitywednesdays/${id}`,
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
  export async function deleteActivitiesWednesday(id) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL2}/activitywednesdays/${id}`,
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
  export async function getStaffsWednesday() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL2}/staffwednesdays`
    );
    if (!res.ok) throw new Error("Failed to fetch data");
    return res.json();
  }
  
  //Method POST
  export async function postStaffsWednesday(data) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL2}/staffwednesdays`,
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
  export async function putStaffsWednesday(data, id) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL2}/staffwednesdays/${id}`,
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
  export async function deleteStaffsWednesday(id) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL2}/staffwednesdays/${id}`,
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
  export async function getDinningWednesday() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL2}/diningwednesdays`
    );
    if (!res.ok) throw new Error("Failed to fetch data");
    return res.json();
  }
  
  //Method PUT
  export async function putDinningWednesday(data, id) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL2}/diningwednesdays/${id}`,
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
  export async function getBreakfastWednesday() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL2}/breakfastwednesdays`
    );
    if (!res.ok) throw new Error("Failed to fetch data");
    return res.json();
  }
  
  //Method PUT
  export async function putBreakfastWednesday(data, id) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL2}/breakfastwednesdays/${id}`,
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
  
  export async function getBarsWednesday() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL2}/barwednesdays`);
    if (!res.ok) throw new Error("Failed to fetch data");
    return res.json();
  }
  
  export async function putBarsWednesday(data, id) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL2}/barwednesdays/${id}`,
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
  export async function getFlyersWednesday() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL2}/flyerwednesdays`
    );
    if (!res.ok) throw new Error("Failed to fetch data");
    return res.json();
  }
  
  //Method POST
  export async function postFlyersWednesday(data) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL2}/flyerwednesdays`,
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
  export async function putFlyersWednesday(data, id) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL2}/flyerwednesdays/${id}`,
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
  export async function deleteFlyersWednesday(id) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL2}/flyerwednesdays/${id}`,
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
  export async function getFlyersTitleWednesday() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL2}/flyertitlewednesdays`
    );
    if (!res.ok) throw new Error("Failed to fetch data");
    return res.json();
  }
  
  //Method PUT
  export async function putFlyersTitleWednesday(data, id) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL2}/flyertitlewednesdays/${id}`,
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
  