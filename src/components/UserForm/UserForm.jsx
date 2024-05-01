import sprite from '../../images/sprite.svg';
import { FormCont, InputCont, InputsCont, NotifyCont, UserFormInput } from './UserForm.styled';

const UserForm = ({ formik }) => {

  return (
    <FormCont>
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
                  <p className="notify-descr success">Success name</p>
                </NotifyCont>
              )}
            {formik.errors.name &&
              formik.touched.name &&
              formik.values.name.length > 0 && (
                <NotifyCont>
                  <svg width="16" height="16" viewBox="0 0 16 16">
                    <use href={`${sprite}#icon-red`} />
                  </svg>
                  <p className="notify-descr error">{formik.errors.name}</p>
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
                  <p className="notify-descr success">Success email</p>
                </NotifyCont>
              )}
            {formik.errors.email &&
              formik.touched.email &&
              formik.values.email.length > 0 && (
                <NotifyCont>
                  <svg width="16" height="16" viewBox="0 0 16 16">
                    <use href={`${sprite}#icon-red`} />
                  </svg>
                  <p className="notify-descr error">{formik.errors.email}</p>
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
                  <p className="notify-descr success">Success phone</p>
                </NotifyCont>
              )}
            {formik.errors.phone &&
              formik.touched.phone &&
              formik.values.phone.length > 0 && (
                <NotifyCont>
                  <svg width="16" height="16" viewBox="0 0 16 16">
                    <use href={`${sprite}#icon-red`} />
                  </svg>
                  <p className="notify-descr error">{formik.errors.phone}</p>
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
                  <p className="notify-descr success">Success address</p>
                </NotifyCont>
              )}
            {formik.errors.address &&
              formik.touched.address &&
              formik.values.address.length > 0 && (
                <NotifyCont>
                  <svg width="16" height="16" viewBox="0 0 16 16">
                    <use href={`${sprite}#icon-red`} />
                  </svg>
                  <p className="notify-descr error">{formik.errors.address}</p>
                </NotifyCont>
              )}
          </InputCont>
        </InputsCont>
      </form>
    </FormCont>
  );
};

export default UserForm;
