import {
  FormControl,
  Stack,
  TextField,
} from '@mui/material';
import { Modal, Button } from 'react-bootstrap';
import styles from '../common.module.css'
import { LoadingButton } from "@mui/lab";
import { useStoreActions } from "../../../store/hooks";
import { ChangeEvent, useState } from "react";
import { UpdatePasswordInterface } from "../../../store/interfaces/auth.interface";
import { toast } from "react-toastify";
import { SalesTeamRoute } from "../../../layout/route";


const Password = (props) => {
  const [modalShow, setModalShow] = useState(false);
  const formEmpty = {
    current_password: '',
    new_password: '',
    retype_password: '',
  };
  const { updatePassword } = useStoreActions(actions => actions.commonUserStore);
  const { setRedirect, setCurrentRoute } = useStoreActions(actions => actions.appStore);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<UpdatePasswordInterface>(formEmpty);

  const handleUpdateData = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    setFormData({ ...formData, [name]: event.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.current_password) {
      toast('Current password is required', { type: 'error' });
      return;
    }

    if (!formData.new_password || !formData.retype_password) {
      toast('New password is required', { type: 'error' });
      return;
    }

    if (formData.new_password !== formData.retype_password) {
      toast('New password is not matched', { type: 'error' });
      return;
    }

    if (formData.new_password == formData.current_password) {
      toast('The new password must be different from the current password', { type: 'error' });
      return;
    }

    setLoading(true);
    const res = await updatePassword(formData);
    setLoading(false);
    switch (res.status) {
      case 200:
        setFormData(formEmpty);
        toast('Password is updated successful', { type: 'success' });
        setRedirect(SalesTeamRoute.path);
        setCurrentRoute(SalesTeamRoute);
        break;
      case 400:
        toast('Current password is not correct', { type: 'error' });
        break;
      default:
        toast('Error while update password', { type: 'error' });
    }
  }

  return (
    <>
      <Button className='justify-content-center col-12' onClick={() => setModalShow(true)}>
        Change Password
      </Button>

      <Modal
        {...props} show={modalShow}
        onHide={() => setModalShow(false)}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton className={`${styles.headerDiv}`}>
          <Modal.Title className={`${styles.passwordHead} ${styles.font18} text-center text-white`}>
            Change Password
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Stack flexDirection={'column'}>
            <TextField
              value={formData.current_password}
              name={'current_password'}
              id='current-password' label={'Current password'} variant={'outlined'} type={'password'}
              onChange={handleUpdateData}
              required={true}
            />
            <TextField
              value={formData.new_password}
              name={'new_password'}
              id='reset-password' label={'Password'} variant={'outlined'} type={'password'}
              onChange={handleUpdateData}
              required={true}
            />
            <TextField
              value={formData.retype_password}
              name={'retype_password'}
              id='reset-password-retype' label={'Re type password'} variant={'outlined'} type={'password'}
              onChange={handleUpdateData}
              required={true}
            />
            <FormControl className='text-center d-block'>
              <LoadingButton
                loading={loading}
                className={`${styles.basic_button} ${styles.gradientBlue} col-6 text-light`}
                loadingPosition={'start'}
                onClick={handleSubmit}
              >
                Set new password
              </LoadingButton>
            </FormControl>
          </Stack>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Password;
