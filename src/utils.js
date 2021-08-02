const URL = "https://api.github.com/users/";

export async function sleep(ms = 2000) {
  return new Promise((res, rej) => {
    setTimeout(res, ms);
  });
}

export async function getUsers(userName) {
  const r = await fetch(URL + userName);
  if (!r.ok) {
    throw Error("bad response");
  }
  return await r.json();
}
