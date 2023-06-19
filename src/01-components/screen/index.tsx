import React, { ReactNode } from 'react';
import clsx from 'clsx';

export interface PropsType {
  children: ReactNode | ReactNode[];
}

const Screen = ({}: PropsType) => <div className={clsx('screen')}>Screen</div>;
export default Screen;
