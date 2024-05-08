import sprite from '../../images/sprite.svg';
import {
  InputCont,
  InputsCont,
  NotifyCont,
  NotifyDescr,
  UserFormInput,
} from './UserForm.styled';

const UserForm = ({ formik }) => {
  return (
    <form id="userForm" onSubmit={formik.handleSubmit}>
      <InputsCont>
        <InputCont>
          <UserFormInput
            autoComplete="off"
            name="name"
            type="text"
            placeholder="Name*"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={
              formik.errors.name &&
              formik.touched.name &&
              formik.values.name.length > 0
                ? 'input-error'
                : formik.touched.name && formik.values.name.length > 0
                ? 'input-success'
                : ''
            }
          />

          {!formik.errors.name &&
            formik.touched.name &&
            formik.values.name.length > 0 && (
              <NotifyCont>
                <svg width="16" height="16" viewBox="0 0 16 16">
                  <use href={`${sprite}#icon-checkbox-circle-fill`} />
                </svg>
                <NotifyDescr className="success">Success name</NotifyDescr>
              </NotifyCont>
            )}
          {formik.errors.name &&
            formik.touched.name &&
            formik.values.name.length > 0 && (
              <NotifyCont>
                <svg width="16" height="16" viewBox="0 0 16 16">
                  <use href={`${sprite}#icon-red`} />
                </svg>
                <NotifyDescr className="error">
                  {formik.errors.name}
                </NotifyDescr>
              </NotifyCont>
            )}
        </InputCont>
        <InputCont>
          <UserFormInput
            autoComplete="off"
            name="email"
            type="email"
            placeholder="Email*"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={
              formik.errors.email &&
              formik.touched.email &&
              formik.values.email.length > 0
                ? 'input-error'
                : formik.touched.email && formik.values.email.length > 0
                ? 'input-success'
                : ''
            }
          />

          {!formik.errors.email &&
            formik.touched.email &&
            formik.values.email.length > 0 && (
              <NotifyCont>
                <svg width="16" height="16" viewBox="0 0 16 16">
                  <use href={`${sprite}#icon-checkbox-circle-fill`} />
                </svg>
                <NotifyDescr className="success">Success email</NotifyDescr>
              </NotifyCont>
            )}
          {formik.errors.email &&
            formik.touched.email &&
            formik.values.email.length > 0 && (
              <NotifyCont>
                <svg width="16" height="16" viewBox="0 0 16 16">
                  <use href={`${sprite}#icon-red`} />
                </svg>
                <NotifyDescr className="error">
                  {formik.errors.email}
                </NotifyDescr>
              </NotifyCont>
            )}
        </InputCont>
        <InputCont>
          <UserFormInput
            autoComplete="off"
            name="phone"
            type="tel"
            placeholder="Phone*"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={
              formik.errors.phone &&
              formik.touched.phone &&
              formik.values.phone.length > 0
                ? 'input-error'
                : formik.touched.phone && formik.values.phone.length > 0
                ? 'input-success'
                : ''
            }
          />

          {!formik.errors.phone &&
            formik.touched.phone &&
            formik.values.phone.length > 0 && (
              <NotifyCont>
                <svg width="16" height="16" viewBox="0 0 16 16">
                  <use href={`${sprite}#icon-checkbox-circle-fill`} />
                </svg>
                <NotifyDescr className="success">Success phone</NotifyDescr>
              </NotifyCont>
            )}
          {formik.errors.phone &&
            formik.touched.phone &&
            formik.values.phone.length > 0 && (
              <NotifyCont>
                <svg width="16" height="16" viewBox="0 0 16 16">
                  <use href={`${sprite}#icon-red`} />
                </svg>
                <NotifyDescr className="error">
                  {formik.errors.phone}
                </NotifyDescr>
              </NotifyCont>
            )}
        </InputCont>
        <InputCont>
          <UserFormInput
            autoComplete="off"
            name="address"
            type="text"
            placeholder="Address*"
            value={formik.values.address}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={
              formik.errors.address &&
              formik.touched.address &&
              formik.values.address.length > 0
                ? 'input-error'
                : formik.touched.address && formik.values.address.length > 0
                ? 'input-success'
                : ''
            }
          />

          {!formik.errors.address &&
            formik.touched.address &&
            formik.values.address.length > 0 && (
              <NotifyCont>
                <svg width="16" height="16" viewBox="0 0 16 16">
                  <use href={`${sprite}#icon-checkbox-circle-fill`} />
                </svg>
                <NotifyDescr className="success">Success address</NotifyDescr>
              </NotifyCont>
            )}
          {formik.errors.address &&
            formik.touched.address &&
            formik.values.address.length > 0 && (
              <NotifyCont>
                <svg width="16" height="16" viewBox="0 0 16 16">
                  <use href={`${sprite}#icon-red`} />
                </svg>
                <NotifyDescr className="error">
                  {formik.errors.address}
                </NotifyDescr>
              </NotifyCont>
            )}
        </InputCont>
      </InputsCont>
    </form>
  );
};

export default UserForm;
