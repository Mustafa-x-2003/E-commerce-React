import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: "0 4px",
  },
}));

export default function CartIcon({ count, icon }) {
  return (
    <IconButton aria-label="cart">
      <StyledBadge
        badgeContent={count}
        sx={{
          "& .MuiBadge-badge": {
            backgroundColor: "var(--main-color)", // اللون اللي انت عايزه
            color: "var(--white-color)",
          },
        }}
        className="text-(--p-color)"
      >
        {icon}
      </StyledBadge>
    </IconButton>
  );
}
