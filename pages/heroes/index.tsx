import type { NextPage } from 'next';
import styles from './heroes.module.css';

const { title } = styles;

const Component: NextPage = () => {
    return <h1 className={title}>Tour of Heroes</h1>;
}

export default Component;
