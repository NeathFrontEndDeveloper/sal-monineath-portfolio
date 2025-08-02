"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { motion } from "framer-motion";
import { Send, User, Mail, MessageSquare, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const FormSchema = z.object({
  full_name: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  user_name: z.string().min(3, {
    message: "Username must be at least 3 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

const ContactForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      full_name: "",
      user_name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    console.log(data);
    toast.success("Message sent successfully! I'll get back to you soon.", {
      duration: 4000,
      position: "top-right",
    });
    form.reset();
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  const formFields = [
    {
      name: "full_name",
      label: "Full Name",
      placeholder: "Enter your full name",
      icon: <User className="w-4 h-4" />,
      type: "text",
    },
    {
      name: "user_name",
      label: "Username",
      placeholder: "Choose a username",
      icon: <User className="w-4 h-4" />,
      type: "text",
    },
    {
      name: "email",
      label: "Email Address",
      placeholder: "your.email@example.com",
      icon: <Mail className="w-4 h-4" />,
      type: "email",
    },
  ];

  return (
    <section className="w-full min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-[#00ff99]" />
            <span className="text-[#00ff99] text-sm sm:text-base font-semibold uppercase tracking-wider">
              Get In Touch
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent mb-4">
            Let's Work Together
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Send me a message
            and let's create something amazing together.
          </p>
        </motion.div>

        {/* Form Container */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Background Effects */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#00ff99]/20 via-blue-500/20 to-purple-600/20 rounded-2xl blur-xl opacity-50" />

          <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 lg:p-12">
            <Form {...form}>
              <motion.form
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                {/* Input Fields Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {formFields.map((fieldConfig) => (
                    <motion.div key={fieldConfig.name} variants={itemVariants}>
                      <FormField
                        control={form.control}
                        name={
                          fieldConfig.name as keyof z.infer<typeof FormSchema>
                        }
                        render={({ field }) => (
                          <FormItem className="space-y-2">
                            <FormLabel className="text-white font-medium flex items-center gap-2">
                              {fieldConfig.icon}
                              {fieldConfig.label}
                            </FormLabel>
                            <FormControl>
                              <div className="relative group">
                                <Input
                                  type={fieldConfig.type}
                                  placeholder={fieldConfig.placeholder}
                                  className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-[#00ff99] focus:ring-[#00ff99]/20 transition-all duration-300 h-12 pl-4 group-hover:border-white/30"
                                  {...field}
                                />
                                <div className="absolute inset-0 rounded-md bg-gradient-to-r from-[#00ff99]/0 via-[#00ff99]/0 to-[#00ff99]/0 group-focus-within:from-[#00ff99]/10 group-focus-within:via-[#00ff99]/5 group-focus-within:to-[#00ff99]/10 pointer-events-none transition-all duration-300" />
                              </div>
                            </FormControl>
                            <FormMessage className="text-red-400 text-sm" />
                          </FormItem>
                        )}
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Message Field */}
                <motion.div variants={itemVariants} className="lg:col-span-2">
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel className="text-white font-medium flex items-center gap-2">
                          <MessageSquare className="w-4 h-4" />
                          Your Message
                        </FormLabel>
                        <FormControl>
                          <div className="relative group">
                            <Textarea
                              placeholder="Tell me about your project, ideas, or just say hello..."
                              className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-[#00ff99] focus:ring-[#00ff99]/20 transition-all duration-300 min-h-32 resize-none group-hover:border-white/30"
                              {...field}
                            />
                            <div className="absolute inset-0 rounded-md bg-gradient-to-r from-[#00ff99]/0 via-[#00ff99]/0 to-[#00ff99]/0 group-focus-within:from-[#00ff99]/10 group-focus-within:via-[#00ff99]/5 group-focus-within:to-[#00ff99]/10 pointer-events-none transition-all duration-300" />
                          </div>
                        </FormControl>
                        <FormMessage className="text-red-400 text-sm" />
                      </FormItem>
                    )}
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.div
                  variants={itemVariants}
                  className="flex justify-start pt-4"
                >
                  <Button
                    type="submit"
                    disabled={form.formState.isSubmitting}
                    className="group relative px-8 py-4 bg-gradient-to-r from-[#00ff99] to-[#00d4ff] hover:from-[#00d4ff] hover:to-[#00ff99] text-black font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#00ff99]/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    <span className="flex items-center gap-2">
                      {form.formState.isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </>
                      )}
                    </span>

                    {/* Button glow effect */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#00ff99] to-[#00d4ff] opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />
                  </Button>
                </motion.div>

                {/* Footer Note */}
                <motion.div
                  variants={itemVariants}
                  className="text-center text-sm text-gray-400 pt-4"
                >
                  <p>
                    I typically respond within 24 hours. Looking forward to
                    hearing from you! ✨
                  </p>
                </motion.div>
              </motion.form>
            </Form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
