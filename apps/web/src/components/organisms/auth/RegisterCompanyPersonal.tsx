'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { UseFormReturn } from 'react-hook-form';
import { CompanyRegisterFormData } from '@/lib/validations/zodAuthValidation';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  User as UserIcon,
} from 'lucide-react';

interface RegisterCompanyPersonalProps {
  form: UseFormReturn<CompanyRegisterFormData>;
  isPending: boolean;
}

export default function RegisterCompanyPersonal({ form, isPending }: RegisterCompanyPersonalProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
        <UserIcon className="h-4 w-4" />
        Admin Information (Your Details)
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* First Name */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.45 }}>
          <Label htmlFor="firstName">Your First Name *</Label>
          <div className="relative mt-1">
            <UserIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input 
              id="firstName" 
              placeholder="John" 
              {...form.register('firstName')} 
              className="pl-10 h-11"
              disabled={isPending}
            />
          </div>
          {form.formState.errors.firstName && (
            <p className="text-sm text-red-600 mt-1">
              {form.formState.errors.firstName.message}
            </p>
          )}
        </motion.div>

        {/* Last Name */}
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
          <Label htmlFor="lastName">Your Last Name *</Label>
          <div className="relative mt-1">
            <UserIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input 
              id="lastName" 
              placeholder="Doe" 
              {...form.register('lastName')} 
              className="pl-10 h-11"
              disabled={isPending}
            />
          </div>
          {form.formState.errors.lastName && (
            <p className="text-sm text-red-600 mt-1">
              {form.formState.errors.lastName.message}
            </p>
          )}
        </motion.div>
      </div>

      {/* Personal Email */}
      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.55 }}>
        <Label htmlFor="email">Your Email Address *</Label>
        <div className="relative mt-1">
          <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input 
            id="email" 
            type="email" 
            placeholder="your.email@example.com" 
            {...form.register('email')} 
            className="pl-10 h-11"
            disabled={isPending}
          />
        </div>
        {form.formState.errors.email && (
          <p className="text-sm text-red-600 mt-1">
            {form.formState.errors.email.message}
          </p>
        )}
      </motion.div>

      {/* Password */}
      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}>
        <Label htmlFor="password">Password *</Label>
        <div className="relative mt-1">
          <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            id="password"
            type={showPassword ? 'text' : 'password'}
            placeholder="••••••••"
            {...form.register('password')}
            className="pl-10 pr-10 h-11"
            disabled={isPending}
          />
          <button 
            type="button" 
            onClick={() => setShowPassword(!showPassword)} 
            className="absolute right-3 top-1/2 -translate-y-1/2 hover:text-primary disabled:opacity-50"
            disabled={isPending}
          >
            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        </div>
        {form.formState.errors.password && (
          <p className="text-sm text-red-600 mt-1">
            {form.formState.errors.password.message}
          </p>
        )}
      </motion.div>

      {/* Confirm Password */}
      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.65 }}>
        <Label htmlFor="confirmPassword">Confirm Password *</Label>
        <div className="relative mt-1">
          <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            id="confirmPassword"
            type={showConfirmPassword ? 'text' : 'password'}
            placeholder="••••••••"
            {...form.register('confirmPassword')}
            className="pl-10 pr-10 h-11"
            disabled={isPending}
          />
          <button 
            type="button" 
            onClick={() => setShowConfirmPassword(!showConfirmPassword)} 
            className="absolute right-3 top-1/2 -translate-y-1/2 hover:text-primary disabled:opacity-50"
            disabled={isPending}
          >
            {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        </div>
        {form.formState.errors.confirmPassword && (
          <p className="text-sm text-red-600 mt-1">
            {form.formState.errors.confirmPassword.message}
          </p>
        )}
      </motion.div>
    </div>
  );
}