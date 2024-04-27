import sprite from '../../images/sprite.svg';
import { FormCont, InputsCont, UserFormInput } from './UserForm.styled';

const UserForm = ({ formik }) => {

  return (
    <FormCont>
      <form id="userForm" onSubmit={formik.handleSubmit}>
        <InputsCont>
          <div className="input-cont">
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
                <div className="notify-cont">
                  <svg width="16" height="16" viewBox="0 0 16 16">
                    <use href={`${sprite}#icon-checkbox-circle-fill`} />
                  </svg>
                  <p className="notify-descr success">Success name</p>
                </div>
              )}
            {formik.errors.name &&
              formik.touched.name &&
              formik.values.name.length > 0 && (
                <div className="notify-cont">
                  <svg width="16" height="16" viewBox="0 0 16 16">
                    <use href={`${sprite}#icon-red`} />
                  </svg>
                  <p className="notify-descr error">{formik.errors.name}</p>
                </div>
              )}
          </div>
          <div className="input-cont">
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
                <div className="notify-cont">
                  <svg width="16" height="16" viewBox="0 0 16 16">
                    <use href={`${sprite}#icon-checkbox-circle-fill`} />
                  </svg>
                  <p className="notify-descr success">Success email</p>
                </div>
              )}
            {formik.errors.email &&
              formik.touched.email &&
              formik.values.email.length > 0 && (
                <div className="notify-cont">
                  <svg width="16" height="16" viewBox="0 0 16 16">
                    <use href={`${sprite}#icon-red`} />
                  </svg>
                  <p className="notify-descr error">{formik.errors.email}</p>
                </div>
              )}
          </div>
          <div className="input-cont">
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
                <div className="notify-cont">
                  <svg width="16" height="16" viewBox="0 0 16 16">
                    <use href={`${sprite}#icon-checkbox-circle-fill`} />
                  </svg>
                  <p className="notify-descr success">Success phone</p>
                </div>
              )}
            {formik.errors.phone &&
              formik.touched.phone &&
              formik.values.phone.length > 0 && (
                <div className="notify-cont">
                  <svg width="16" height="16" viewBox="0 0 16 16">
                    <use href={`${sprite}#icon-red`} />
                  </svg>
                  <p className="notify-descr error">{formik.errors.phone}</p>
                </div>
              )}
          </div>
          <div className="input-cont">
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
                <div className="notify-cont">
                  <svg width="16" height="16" viewBox="0 0 16 16">
                    <use href={`${sprite}#icon-checkbox-circle-fill`} />
                  </svg>
                  <p className="notify-descr success">Success address</p>
                </div>
              )}
            {formik.errors.address &&
              formik.touched.address &&
              formik.values.address.length > 0 && (
                <div className="notify-cont">
                  <svg width="16" height="16" viewBox="0 0 16 16">
                    <use href={`${sprite}#icon-red`} />
                  </svg>
                  <p className="notify-descr error">{formik.errors.address}</p>
                </div>
              )}
          </div>
        </InputsCont>
      </form>
    </FormCont>
  );
};

export default UserForm;
