import { fetchAuthors } from '@/lib/data.service';
import styles from './page.module.css'
import DevDebugJson from '@/components/dev/devDebugJson/devDebugJson';
import DevAuthorHero from '@/components/dev/devAuthorHero/devAuthorHero';


const Page = async () => {

    const authors = await fetchAuthors();

    return (

        <main className={styles.page}>
            
            <h1>Alt Author Data</h1>
            <DevDebugJson content={authors}></DevDebugJson>
  

            <h2>Hvert Enkelt Author</h2>
          
            {authors.map((author, index) => {
    return <DevAuthorHero key={index} author={author} />
})}
        </main>

    );

}

export default Page