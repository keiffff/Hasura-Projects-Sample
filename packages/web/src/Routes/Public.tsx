import React, { useEffect } from 'react';

type Props = {
  onMounted: () => void;
};

export const Public = ({ onMounted }: Props) => {
  useEffect(() => {
    onMounted();
  }, [onMounted]);

  return <></>;
};
