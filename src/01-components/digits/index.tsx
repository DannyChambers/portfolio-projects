import React, { ReactNode } from 'react';
import clsx from 'clsx';

export interface PropsType {
  children: ReactNode | ReactNode[];
}

const Digits = ({}: PropsType) => <div className={clsx('digits')}>Digits</div>;

Digits.displayName = 'Digits';

export default Digits;
