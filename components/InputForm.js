import { Formik, Form, Field } from 'formik';
import {
  Input,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from '@chakra-ui/react';
import getSummary from '../utils/getFloorPrices';
var utils = require('ethers').utils;

export default function InputForm(props) {
  const formSubmit = async (values) => {
    console.log(values);
    try {
      if (values) {
        props.setPending(true);
        if (values.address) {
          const address = utils.getAddress(values.address);
          const summary = getSummary(address);
          props.setSummary(summary);
          props.setFetched(true);
          props.setPending(false);
        }
      }
    } catch (e) {
      console.error('invalid ethereum address', e);
      props.setPending(false);
    }
  };

  function validateAddress(value) {
    let error;
    if (!value) {
      error = 'Please enter a valid address';
    } else if (value.substring(0, 2) !== '0x') {
      console.log('start', value.substring(0, 2));
      error = "Address must start with '0x'";
    } else if (value.length !== 42) {
      error = 'Please enter a valid address';
    }
    return error;
  }

  return (
    <Formik
      initialValues={{ address: '' }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          formSubmit(values);
          actions.setSubmitting(false);
        }, 1000);
      }}
    >
      {(props) => (
        <Form>
          <Field name='address' validate={validateAddress}>
            {({ field, form }) => (
              <FormControl
                isInvalid={form.errors.address && form.touched.address}
              >
                <FormLabel htmlFor='address'>Wallet Address</FormLabel>
                <Input
                  {...field}
                  id='address'
                  placeholder='0x0000000000000000000000000000000000000000'
                />
                <FormErrorMessage>{form.errors.address}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Button
            mt={4}
            size='xl'
            variant='with-shadow'
            isLoading={props.isSubmitting}
            type='submit'
          >
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
}
