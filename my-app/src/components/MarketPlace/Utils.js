import Avatar from "@mui/material/Avatar";
import { Rare,Aura } from "../utils/Data";
import { Button } from "@mui/material";
var formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',

  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});
export const columns = [
  { field: "id", headerName: "id", width: 90 },
  { field: "name", headerName: "Elemon", width: 110 },
  {
    field: "petAvatar",
    headerName: "Image",
    width: 80,
    sortable: false,
    renderCell: (params) => (
      <img
        style={{ width: "50px", height: "100%", objectFit: "contain" }}
        src={params.value}
        alt="logo"
      />
    ),
  },
  { field: "rate", headerName: "Rate", width: 100, type: "number" },
  { field: "point", headerName: "Power", width: 100, type: "number" },
  { field: "price", headerName: "Price", width: 100, type: "number",
  renderCell:(params)=>(<div style={{wordSpacing:'8px'}}>{formatter.format(params.value)}</div>)
  },
  {
    field: "class",
    headerName: "Class",
    width: 130,
    type:'number',
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
    type:"number",
    width: 130,
    renderCell: (params) => (
      
      <div style={{ alignItems: "center", display: "flex", gap: "0 4px" }}>
  
      <span>{Aura[params.value-1]?.name}</span>
      <img
        style={{ width: "50px", height: "100%", objectFit: "contain",backgroundImage:`url(${getAuraLogo(params.value)})` }}
        src={getAuraLogo(params.value)}
        alt="logo"
      />
    </div>
 
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
  { field: "level", headerName: "Level", width: 80, type: "number" },

  { field: "HP", headerName: "HP", width: 100, type: "number" },
  { field: "pAtk", headerName: "P.Attack", width: 100, type: "number" },
  { field: "mAtk", headerName: "M.Attack", width: 100, type: "number" },
  { field: "pDef", headerName: "P.Def", width: 100, type: "number" },
  { field: "mDef", headerName: "M.Def", width: 100, type: "number" },
  { field: "spd", headerName: "Speed", width: 100, type: "number" },
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
  
    <span>{text}</span>
    <img
      style={{ width: width, height: "100%", objectFit: "contain" }}
      src={getFunction(info)}
      alt="logo"
    />
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
const getAuraLogo = (info) => {
  return `/images/aura/quality_${info}.png`;
};
