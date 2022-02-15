import Avatar from "@mui/material/Avatar";
import { Rare,Aura } from "../utils/Data";
import { Button } from "@mui/material";
export const columns = [
  { field: "id", headerName: "id", width: 130 },
  { field: "name", headerName: "Elemon", width: 130 },
  {
    field: "petAvatar",
    headerName: "Image",
    width: 130,
    sortable: false,
    renderCell: (params) => (
      <img
        style={{ width: "100px", height: "100%", objectFit: "contain" }}
        src={params.value}
        alt="logo"
      />
    ),
  },
  { field: "point", headerName: "Power", width: 150, type: "number" },
  { field: "price", headerName: "Price", width: 130, type: "number" },
  {
    field: "class",
    headerName: "Class",
    width: 130,
    renderCell: (params) => (
      <LogoDiv
        info={params.value}
        getFunction={getClassLogo}
        width="40px"
        text={params.value}
      />
    ),
  },
  {
    field: "quality",
    headerName: "Aura",
    width: 130,
    renderCell: (params) => (
     <span>{Aura[params.value-1].name}</span>
    ),
  },
  {
    field: "rarity",
    headerName: "rarity",
    width: 130,
    renderCell: (params) => (
      <LogoDiv info={Rare[params.value-1].name} getFunction={getRareLogo} />
    ),
  },
  {
    field: "purity",
    headerName: "purity",
    renderCell: (params) => (
      <LogoDiv info={params.value} getFunction={getPurityLogo} />
    ),
    width: 90,
  },
  { field: "bodyPart1", headerName: "HP", width: 130, type: "number" },
  { field: "bodyPart2", headerName: "P.Attack", width: 130, type: "number" },
  { field: "bodyPart3", headerName: "M.Attack", width: 130, type: "number" },
  { field: "bodyPart4", headerName: "P.Def", width: 130, type: "number" },
  { field: "bodyPart5", headerName: "M.Def", width: 130, type: "number" },
  { field: "bodyPart6", headerName: "Speed", width: 130, type: "number" },
  {
    field: "link",
    headerName: "Action",
    width: 130,
    renderCell: (params) => (
      <a
        style={{ textDecoration: "none", color: "#1976D2" }}
        href={`${params.value ? params.value : "/"}`}
        rel="noopener noreferrer"
        target="_blank"
      >
        <Button variant="outlined">Buy </Button>
      </a>
    ),
  },
];
const LogoDiv = ({ info, getFunction, width = "50px", text = "" }) => (
  <div style={{ alignItems: "center", display: "flex", gap: "0 4px" }}>
    <img
      style={{ width: width, height: "100%", objectFit: "contain" }}
      src={getFunction(info)}
      alt="logo"
    />
    <span>{text}</span>
  </div>
);
function getRareLogo(rarity) {
  return `/images/rare/rarity_${rarity}.png`;
}

const getPurityLogo = (info) => {
  return `/images/pure/purity_${info}.png`;
};

const getClassLogo = (info) => {
  return `/images/class/${info}.png`;
};
