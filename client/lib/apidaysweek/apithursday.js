//ACTIVITIES!!!!!!!

//Method GET
export async function getActivitiesThursday() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL2}/activitythursdays`
    );
    if (!res.ok) throw new Error("Failed to fetch data");
    return res.json();
  }
  
  //Method POST
  export async function postActivitiesThursday(data) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL2}/activitythursdays`,
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
  export async function putActivitiesThursday(data, id) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL2}/activitythursdays/${id}`,
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
  export async function deleteActivitiesThursday(id) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL2}/activitythursdays/${id}`,
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
  export async function getStaffsThursday() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL2}/staffthuesdays`
    );
    if (!res.ok) throw new Error("Failed to fetch data");
    return res.json();
  }
  
  export async function postStaffsThursday(data) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL2}/staffthuesdays`,
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
  export async function putStaffsThursday(data, id) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL2}/staffthuesdays/${id}`,
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
  export async function deleteStaffsThursday(id) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL2}/staffthuesdays/${id}`,
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
  export async function getDinningThursday() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL2}/diningthursdays`
    );
    if (!res.ok) throw new Error("Failed to fetch data");
    return res.json();
  }
  
  //Method PUT
  export async function putDinningThursday(data, id) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL2}/diningthursdays/${id}`,
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
  export async function getBreakfastThursday() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL2}/breakfastthursdays`
    );
    if (!res.ok) throw new Error("Failed to fetch data");
    return res.json();
  }
  
  //Method PUT
  export async function putBreakfastThursday(data, id) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL2}/breakfastthursdays/${id}`,
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
  
  export async function getBarsThursday() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL2}/barthursdays`);
    if (!res.ok) throw new Error("Failed to fetch data");
    return res.json();
  }
  
  export async function putBarsThursday(data, id) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL2}/barthursdays/${id}`,
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
  export async function getFlyersThursday() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL2}/flyerthursdays`
    );
    if (!res.ok) throw new Error("Failed to fetch data");
    return res.json();
  }
  
  //Method POST
  export async function postFlyersThursday(data) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL2}/flyerthursdays`,
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
  export async function putFlyersThursday(data, id) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL2}/flyerthursdays/${id}`,
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
  export async function deleteFlyersThursday(id) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL2}/flyerthursdays/${id}`,
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
  export async function getFlyersTitleThursday() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL2}/flyertitlethursdays`
    );
    if (!res.ok) throw new Error("Failed to fetch data");
    return res.json();
  }
  
  //Method PUT
  export async function putFlyersTitleThursday(data, id) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL2}/flyertitlethursdays/${id}`,
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
  
    //SCREEN
//Method PUT
export async function getScreensThursday() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL2}/screenthursdays`
  );
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
}

//Method PUT
export async function putScreensThursday(data, id) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL2}/screenthursdays/${id}`,
    {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }
  );
  res.ok ? alert("Archivo actualizado exitosamente") : null;
  if (!res.ok) throw new Error("Failed to update data");
  return res.json();
}
