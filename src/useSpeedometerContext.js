import { useContext } from 'react';
import Context from './context';

export default function useSpeedometerContext() {
  return useContext(Context)
}