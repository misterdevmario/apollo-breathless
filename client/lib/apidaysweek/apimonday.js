//ACTIVITIES!!!!!!!

//Method GET
export async function getActivitiesMonday() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL2}/activitymondays?pagination[page]=0&pagination[pageSize]=50`
  );
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
}

//Method POST
export async function postActivitiesMonday(data) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL2}/activitymondays`,
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
export async function putActivitiesMonday(data, id) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL2}/activitymondays/${id}`,
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
export async function deleteActivitiesMonday(id) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL2}/activitymondays/${id}`,
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
export async function getStaffsMonday() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL2}/staffmondays`
  );
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
}

//Method POST
export async function postStaffsMonday(data) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL2}/staffmondays`,
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
export async function putStaffsMonday(data, id) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL2}/staffmondays/${id}`,
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
export async function deleteStaffsMonday(id) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL2}/staffmondays/${id}`,
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
export async function getDinningMonday() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL2}/diningmondays`
  );
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
}

//Method PUT
export async function putDinningMonday(data, id) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL2}/diningmondays/${id}`,
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
export async function getBreakfastMonday() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL2}/breakfastmondays`
  );
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
}

//Method PUT
export async function putBreakfastMonday(data, id) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL2}/breakfastmondays/${id}`,
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

export async function getBarsMonday() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL2}/barmondays`);
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
}

export async function putBarsMonday(data, id) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL2}/barmondays/${id}`,
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
export async function getFlyersMonday() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL2}/flyermondays`
  );
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
}

//Method POST
export async function postFlyersMonday(data) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL2}/flyermondays`,
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
export async function putFlyersMonday(data, id) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL2}/flyermondays/${id}`,
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
export async function deleteFlyersMonday(id) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL2}/flyermondays/${id}`,
    {
      method: "DELETE",
    }
  );
  res.ok ? alert("Flyer eliminado exitosamente") : null;
  if (!res.ok) throw new Error("Failed to update data");
  return res.json();
}

//FLYERS TITLE!!!!!!!
//monday
//Method GET
export async function getFlyersTitleMonday() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL2}/flyertitlemondays`
  );
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
}

//Method PUT
export async function putFlyersTitleMonday(data, id) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL2}/flyertitlemondays/${id}`,
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

//tuesday
