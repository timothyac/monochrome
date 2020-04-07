export const returnServerStatus = (status) => {
  if (status === "online") return "#48bb78";
  if (status === "offline") return "#F56565";
};

export const returnTaskStatus = (status) => {
  if (status === "Success") return ["#48bb78", "Upload"];
  if (status === "Failure") return ["#F56565", "Restart"];
  if (status === "Ready") return ["#4299E1", "Start"];
  if (status === "Running") return ["#ECC94B", "Stop"];
};
