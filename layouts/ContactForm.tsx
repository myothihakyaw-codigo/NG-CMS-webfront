import Anime from 'components/Anime'
import Button from 'components/Button'
import { Form, Input, Phone } from 'components/Form'
import Text from 'components/Text'
import Title from 'components/Title'
import CloseCirleIcon from 'icons/CloseCircle'
import GirlFloating from 'illustrations/GirlFloating'
import { useRecoilState } from 'recoil'
import { isContactOpenState } from 'states'
import * as Yup from 'yup'
import styles from './ContactForm.module.scss'

const schema = Yup.object({
  fName: Yup.string().required(''),
  lName: Yup.string().required(''),
  email: Yup.string().email('Invalid email address').required(''),
  phone: Yup.string().length(8, 'Invalid phone number').required(''),
  message: Yup.string().required(''),
})

const defaults = {
  phoneCode: '+65',
}

export default function ContactForm() {
  const [open, setOpen] = useRecoilState(isContactOpenState)
  return (
    <aside className={`${styles.root} ${open && styles.open}`}>
      <i style={{ flex: 1 }} onClick={() => setOpen(false)} />
      <Form schema={schema} defaults={defaults} className={styles.form}>
        <CloseCirleIcon className={styles.close} onClick={() => setOpen(false)} />
        <Anime
          item={<GirlFloating className={styles.anime} />}
          duration={1000}
          direction={open ? 'normal' : 'reverse'}
        />
        <div className={`${styles.content} ${styles[open ? 'fade-in' : 'fade-out']}`}>
          <Title size="xs" as="h2">
            Get in touch
          </Title>
          <Text size="xxl-2x" bold>
            Let us know what’s <br /> on your mind.
          </Text>
          <div className={styles.box}>
            <Input name="fName" label="First name" />
            <Input name="lName" label="Last name" />
          </div>
          <div className={styles.box}>
            <Input name="email" label="Email address" />
            <Phone name="phone" label="Contact number" />
          </div>
          <Input name="company" label="Company name (Optional)" />
          <Input name="message" label="Your message" />
          <Button type="submit" label="Submit" className={styles.submit} />
        </div>
      </Form>
    </aside>
  )
}
