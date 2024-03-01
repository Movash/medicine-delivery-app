import { useFormik } from 'formik';
import { formSchema } from '../../schemas/FormSchema/FormSchema';
import { FormCont } from './UserForm.styled';
import sprite from '../../images/sprite.svg';

const UserForm = ({ registration }) => {

  // const onSubmit = async ({ name, email, password }, actions) => {
  //   registration({
  //     name: name,
  //     email: email,
  //     password: password,
  //   });
  //   await new Promise(resolve => setTimeout(resolve, 1000));
  // };

  // const formik = useFormik({
  //   initialValues: {
  //     name: '',
  //     email: '',
  //     password: '',
  //   },
  //   validationSchema: formSchema,
  //   onSubmit,
  // });

    const onSubmit = async ({ name, email, phone, address }, actions) => {
      registration({
        name: name,
        email: email,
        phone: phone,
        address: address,
      });
      await new Promise(resolve => setTimeout(resolve, 1000));
    };

    const formik = useFormik({
      initialValues: {
        name: '',
        email: '',
        phone: '',
        address: '',
      },
      validationSchema: formSchema,
      onSubmit,
    });

  return (
    <FormCont>
      <div>
        <form onSubmit={formik.handleSubmit}>
          <div className="inputs-cont">
            <div>
              <input
                autoComplete="off"
                name="name"
                type="text"
                placeholder="Name"
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
            <div>
              <input
                autoComplete="off"
                name="email"
                type="email"
                placeholder="Email"
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
            {/* <div>
              <input
                autoComplete="off"
                name="password"
                type="text"
                placeholder="Password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={
                  formik.errors.password &&
                  formik.touched.password &&
                  formik.values.password.length > 0
                    ? 'input-error'
                    : formik.touched.password &&
                      formik.values.password.length > 0
                    ? 'input-success'
                    : ''
                }
              />

              {!formik.errors.password &&
                formik.touched.password &&
                formik.values.password.length > 0 && (
                  <div className="notify-cont">
                    <svg width="16" height="16" viewBox="0 0 16 16">
                      <use href={`${sprite}#icon-checkbox-circle-fill`} />
                    </svg>
                    <p className="notify-descr success">Success password</p>
                  </div>
                )}
              {formik.errors.password &&
                formik.touched.password &&
                formik.values.password.length > 0 && (
                  <div className="notify-cont">
                    <svg width="16" height="16" viewBox="0 0 16 16">
                      <use href={`${sprite}#icon-red`} />
                    </svg>
                    <p className="notify-descr error">
                      {formik.errors.password}
                    </p>
                  </div>
                )}
            </div> */}
            <div>
              <input
                autoComplete="off"
                name="phone"
                type="tel"
                placeholder="Phone"
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
            <div>
              <input
                autoComplete="off"
                name="address"
                type="text"
                placeholder="Address"
                value={formik.values.address}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={
                  formik.errors.address &&
                  formik.touched.address &&
                  formik.values.address.length > 0
                    ? 'input-error'
                    : formik.touched.address &&
                      formik.values.address.length > 0
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
                    <p className="notify-descr error">
                      {formik.errors.address}
                    </p>
                  </div>
                )}
            </div>
          </div>
          <button
            type="submit"
            className="submit-btn"
            disabled={formik.isSubmitting}
          >
            Sign Up
          </button>
        </form>
      </div>
    </FormCont>
  );
};

export default UserForm;
