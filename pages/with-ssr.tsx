import PageContent from "~/components/layout/PageContent"

export default function WithSSR({ title }: { title: string }) {
  console.log("WithSSR page...frontend")
  return (
    <PageContent
      sx={{
        flex:1
      }}
    >
      <h1>{title}</h1>
      <section>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum aspernatur quidem fuga ut ab ipsa? Omnis, autem earum tempore aut sapiente doloremque reiciendis esse alias obcaecati deserunt expedita debitis iure ducimus recusandae odit maiores laborum voluptates, impedit velit asperiores, aperiam eum. Iusto nobis illo saepe ea blanditiis necessitatibus consequatur commodi, sint atque perferendis sit deleniti obcaecati totam voluptas eveniet sunt aliquid, laboriosam, libero impedit alias ad! Doloribus fugiat quo eveniet neque itaque voluptas id animi voluptates, eligendi tempore minus rem quos in iste minima accusamus modi totam perspiciatis maiores saepe, recusandae non quam nihil voluptatum. Nostrum laborum officia incidunt, iste ab repellat illo ullam ad odit veniam eaque laudantium non sit, nesciunt harum inventore nemo? Tenetur nesciunt odio similique praesentium quis! Deleniti numquam, deserunt iste, unde modi a voluptas praesentium vel nam perferendis rem eaque sunt eos. Nostrum possimus, rem eaque, quo vero est ratione, nulla similique harum iste facilis aspernatur inventore hic! Impedit blanditiis sapiente eum velit. Obcaecati blanditiis modi cumque est in quas nobis beatae illum officiis. Recusandae vitae perferendis dignissimos, reprehenderit non incidunt sed natus minima corporis cumque, eum saepe et ut iusto. Totam omnis blanditiis odit ipsam odio, sunt explicabo porro veritatis velit, necessitatibus laboriosam harum. Architecto fuga sit exercitationem dolore minima delectus, fugiat inventore earum iste accusamus dicta provident ut totam id beatae soluta. Odit optio dolorem ullam impedit totam velit. Porro nesciunt magni reiciendis impedit quas inventore. Porro, incidunt voluptate dolor et magnam quo quasi illo, libero dignissimos perspiciatis saepe commodi maiores dolore asperiores eligendi error amet officia reiciendis? Ipsam officia, velit non voluptates tempora perspiciatis recusandae ratione laboriosam ea libero possimus atque harum explicabo sequi nam, facilis eaque, qui dolores fuga cum aliquam earum eius iure? Blanditiis vitae iure optio suscipit quas, illum accusantium laboriosam ullam. Placeat dolore ut cum, odit eligendi libero ea nemo recusandae delectus? Unde, quos officiis? Tempora libero rem dolorem! Libero quaerat dolorem, pariatur sapiente doloremque dolor consequuntur maiores, ex accusantium repudiandae adipisci repellat? Commodi illo debitis nihil quo, eligendi at iusto, ullam, iure amet totam molestias! Ratione aliquid animi quidem consectetur dolorum vero, nobis necessitatibus temporibus facilis earum expedita non! Laboriosam dolorum ad, tenetur consectetur soluta excepturi? Ratione et fugiat neque est quasi libero, unde autem voluptatibus! Error quaerat eaque quod veniam et earum repellendus eius quidem tempora, iusto numquam minus exercitationem qui non asperiores, facilis assumenda deleniti sit. Tenetur perferendis praesentium quisquam, delectus quam nemo eveniet perspiciatis.</p>
        <h2>Another chapter</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint obcaecati aut dicta corrupti necessitatibus esse, et blanditiis cupiditate cumque ut quibusdam aspernatur atque autem, a facilis nisi odit inventore! Nam sint aspernatur dolores expedita aperiam, incidunt sapiente voluptates dolorum ad, quasi quas eos, illum perspiciatis itaque optio aut sequi quaerat maiores animi temporibus inventore repellat iusto? Nobis saepe consectetur voluptatibus tempora ea tenetur quae, quam modi fugit assumenda quas, expedita eum. Eveniet deserunt iusto ipsum? Animi eligendi nisi soluta eveniet, rem, iste eius asperiores atque deleniti porro recusandae! Accusantium cum mollitia accusamus molestiae, laudantium quas impedit debitis minima amet at.</p>
      </section>
    </PageContent>
  )
}

export async function getServerSideProps() {
  console.log("WithSSR page...getServerSideProps")
  return {
    props: {
      title:"This is the title"
    }
  }
}