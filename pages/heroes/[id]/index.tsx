import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import styles from '../../../styles/app.module.css';
const { title } = styles;

const Component: NextPage = () => {
    const router = useRouter();
    const { id } = router.query;

    return <h1 className={title}>Hero id: {id}</h1>;
}

export default Component;
