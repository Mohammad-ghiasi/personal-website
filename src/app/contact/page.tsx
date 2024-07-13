'use client'
import { useForm } from 'react-hook-form';
import HeadingText from '@/components/headingText/HeadingText';
import { PageBase } from '@/components/PageBase/PageBase';
import { Box, Flex, FormControl, Input, Show, Text, Textarea } from '@chakra-ui/react';
import 'react-toastify/dist/ReactToastify.css';
import CustomButom from '@/components/customButom/CustomButom';
import { IoIosSend } from "react-icons/io";
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import ContactInfo from './ContactInfo';

type FormData = {
  name: string;
  subject: string;
  email: string;
  message: string;
};

export default function ContactPage() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {

    try {
      const response = await axios.post('/api/send-email', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.status === 200) {
        toast.success('Message sent successfully!');
        reset();
      } else {
        const { error } = response.data;
        toast.error(`Failed to send message: ${error}`);
      }
    } catch (error: any) {
      toast.error(`Failed to send message: ${error.message}`);
    }
  };

  return (
    <PageBase>
      <Show above='md'>
        <HeadingText base='CONTACT' text='GET IN' colorText='TOUCH' />
      </Show>
      <Flex flexDirection={{ base: 'column', lg: 'row' }}>
        <ContactInfo />
        <Box flex='14' className='h-[300px] w-[100%]'>
          <Box className='ms-0 lg:ms-10 mt-20 lg:mt-0'>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Box className='flex flex-col space-y-5 md:flex-row md:space-x-10 md:space-y-0'>
                <FormControl>
                  <Input className={errors.name ? 'border border-red-500' : ''} type="text" placeholder="YOUR NAME" size='md' focusBorderColor="customYellow.500" {...register('name', { required: true })} />
                  {errors.name && <Text color="red">Name is required</Text>}
                </FormControl>
                <FormControl>
                  <Input type="text" placeholder="YOUR SUBJECT" size='md' focusBorderColor="customYellow.500" {...register('subject', { required: true })} />
                  {errors.subject && <Text color="red">Subject is required</Text>}
                </FormControl>
              </Box>
              <Box className='flex flex-col'>
                <FormControl className='my-5'>
                  <Input type="email" placeholder="YOUR EMAIL" size='md' focusBorderColor="customYellow.500" {...register('email', { required: true })} />
                  {errors.email && <Text color="red">Email is required</Text>}
                </FormControl>
                <FormControl>
                  <Textarea placeholder="YOUR MESSAGE" size='md' h="100px" focusBorderColor="customYellow.500" {...register('message', { required: true })} />
                  {errors.message && <Text color="red">Message is required</Text>}
                </FormControl>
              </Box>
              <Box className='mb-5 lg:mb-0'>
                <button type='submit'>
                  <CustomButom icon={<IoIosSend size='27px' />} text='SEND MESSAGE' />
                </button>
              </Box>
            </form>
          </Box>
        </Box>
      </Flex>
      <ToastContainer
        autoClose={3000}
        hideProgressBar={true}
        closeButton={false}
      />
    </PageBase>
  );
}
