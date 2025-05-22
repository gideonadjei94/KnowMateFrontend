export function getAvatarDetails(username) {
  if (!username || typeof username !== "string") {
    return { initial: "?", bgColor: "bg-gray-500" };
  }

  const initial = username.trim()[0].toUpperCase();

  const colorMap = {
    A: "bg-red-500",
    B: "bg-orange-500",
    C: "bg-amber-500",
    D: "bg-yellow-500",
    E: "bg-lime-500",
    F: "bg-green-500",
    G: "bg-emerald-500",
    H: "bg-teal-500",
    I: "bg-cyan-500",
    J: "bg-sky-500",
    K: "bg-blue-500",
    L: "bg-indigo-500",
    M: "bg-violet-500",
    N: "bg-purple-500",
    O: "bg-fuchsia-500",
    P: "bg-pink-500",
    Q: "bg-rose-500",
    R: "bg-red-400",
    S: "bg-orange-400",
    T: "bg-yellow-400",
    U: "bg-green-400",
    V: "bg-blue-400",
    W: "bg-indigo-400",
    X: "bg-purple-400",
    Y: "bg-pink-400",
    Z: "bg-rose-400",
  };

  const bgColor = colorMap[initial] || "bg-gray-500";

  return { initial, bgColor };
}
