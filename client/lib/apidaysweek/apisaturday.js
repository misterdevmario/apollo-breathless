//ACTIVITIES!!!!!!!

//Method GET
export async function getActivitiesSaturday() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL2}/activitysaturdays?pagination[page]=1&pagination[pageSize]=50`
  );
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
}

//Method POST
export async function postActivitiesSaturday(data) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL2}/activitysaturdays`,
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
export async function putActivitiesSaturday(data, id) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL2}/activitysaturdays/${id}`,
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
export async function deleteActivitiesSaturday(id) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL2}/activitysaturdays/${id}`,
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
export async function getStaffsSaturday() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL2}/staffsaturdays`
  );
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
}

//Method POST
export async function postStaffsSaturday(data) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL2}/staffsaturdays`,
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
export async function putStaffsSaturday(data, id) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL2}/staffsaturdays/${id}`,
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
export async function deleteStaffsSaturday(id) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL2}/staffsaturdays/${id}`,
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
export async function getDinningSaturday() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL2}/diningsaturdays`
  );
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
}

//Method PUT
export async function putDinningSaturday(data, id) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL2}/diningsaturdays/${id}`,
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
export async function getBreakfastSaturday() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL2}/breakfastsaturdays`
  );
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
}

//Method PUT
export async function putBreakfastSaturday(data, id) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL2}/breakfastsaturdays/${id}`,
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

export async function getBarsSaturday() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL2}/barsaturdays`);
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
}

export async function putBarsSaturday(data, id) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL2}/barsaturdays/${id}`,
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
export async function getFlyersSaturday() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL2}/flyersaturdays`
  );
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
}

//Method POST
export async function postFlyersSaturday(data) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL2}/flyersaturdays`,
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
export async function putFlyersSaturday(data, id) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL2}/flyersaturdays/${id}`,
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
export async function deleteFlyersSaturday(id) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL2}/flyersaturdays/${id}`,
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
export async function getFlyersTitleSaturday() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL2}/flyertitlesaturdays`
  );
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
}

//Method PUT
export async function putFlyersTitleSaturday(data, id) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL2}/flyertitlesaturdays/${id}`,
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
