import { TitleProps, useRouterContext } from "@pankod/refine-core";
import { Button } from "@pankod/refine-mui";
import React from "react";

export const Title: React.FC<TitleProps> = ({ collapsed }) => {
  const { Link } = useRouterContext();

  return (
    <Button fullWidth variant="text" disableRipple>
      <Link href="/">
        {collapsed ? (
          // <img src="/refine-collapsed.svg" alt="Refine" width="28px" />
          <h2>S</h2>
        ) : (
          // <img src="/refine.svg" alt="Refine" width="140px" />
          <h2>Spyberrys</h2>
        )}
      </Link>
    </Button>
  );
};
