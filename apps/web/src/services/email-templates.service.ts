import { render } from '@react-email/components';
import { VerificationEmail } from '@/services/emails/verification-email';
import { PasswordResetEmail } from '@/services/emails/password-reset';
import { SubscriptionActivationEmail } from '@/services/emails/subscription-activation';
import { SubscriptionRejectionEmail } from '@/services/emails/subscription-rejection';
import { SubscriptionExpiredEmail } from '@/services/emails/subscription-expired';
import { sendEmail } from './email-core.service';

export const emailService = {
  sendVerificationEmail: async (
    email: string,
    firstName: string,
    verificationToken: string
  ) => {
    const verificationUrl = `${process.env.NEXTAUTH_URL}/auth/verify-email?token=${verificationToken}`;
    
    // Await the render function since it returns a Promise<string>
    const emailHtml = await render(VerificationEmail({
      firstName,
      verificationUrl,
    }));

    return sendEmail({
      to: email,
      subject: 'Verify your email address',
      html: emailHtml,
      text: `Hi ${firstName}, please verify your email by clicking this link: ${verificationUrl}`,
    });
  },

  sendPasswordResetEmail: async (
    email: string,
    firstName: string,
    resetToken: string
  ) => {
    const resetUrl = `${process.env.NEXTAUTH_URL}/auth/reset-password?token=${resetToken}`;
    
    // Await the render function since it returns a Promise<string>
    const emailHtml = await render(PasswordResetEmail({
      firstName,
      resetUrl,
    }));

    return sendEmail({
      to: email,
      subject: 'Reset your password',
      html: emailHtml,
      text: `Hi ${firstName}, reset your password by clicking this link: ${resetUrl}`,
    });
  },

  sendWelcomeEmail: async (email: string, firstName: string) => {
    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">Welcome to our platform, ${firstName}!</h2>
        <p>Thank you for joining us. We're excited to have you on board.</p>
        <p>If you have any questions, feel free to reach out to our support team.</p>
        <p>Best regards,<br>The Team</p>
      </div>
    `;

    return sendEmail({
      to: email,
      subject: 'Welcome to our platform!',
      html,
      text: `Welcome to our platform, ${firstName}! Thank you for joining us.`,
    });
  },

  sendSubscriptionActivationEmail: async (
    email: string,
    firstName: string,
    planName: string,
    startDate: Date,
    endDate: Date
  ) => {
    const dashboardUrl = `${process.env.NEXTAUTH_URL}/dashboard`;
    
    const formattedStartDate = startDate.toLocaleDateString('id-ID', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    
    const formattedEndDate = endDate.toLocaleDateString('id-ID', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    const emailHtml = await render(SubscriptionActivationEmail({
      firstName,
      planName,
      startDate: formattedStartDate,
      endDate: formattedEndDate,
      dashboardUrl,
    }));

    return sendEmail({
      to: email,
      subject: `🎉 Your ${planName} subscription is now active!`,
      html: emailHtml,
      text: `Hi ${firstName}, great news! Your ${planName} subscription has been activated and is valid from ${formattedStartDate} to ${formattedEndDate}. Visit your dashboard at ${dashboardUrl} to explore your new features.`,
    });
  },

  sendSubscriptionRejectionEmail: async (
    email: string,
    firstName: string,
    planName: string,
    rejectionReason?: string
  ) => {
    const subscriptionUrl = `${process.env.NEXTAUTH_URL}/dashboard/subscription`;
    const supportUrl = `${process.env.NEXTAUTH_URL}/support`;

    const emailHtml = await render(SubscriptionRejectionEmail({
      firstName,
      planName,
      rejectionReason,
      supportUrl,
      subscriptionUrl,
    }));

    return sendEmail({
      to: email,
      subject: `Subscription Payment Issue - ${planName}`,
      html: emailHtml,
      text: `Hi ${firstName}, there was an issue with your ${planName} subscription payment. ${rejectionReason ? `Reason: ${rejectionReason}` : ''} Please visit ${subscriptionUrl} to try again or contact support at ${supportUrl}.`,
    });
  },

  sendSubscriptionExpiredEmail: async (
    email: string,
    firstName: string,
    planName: string,
    endDate: Date
  ) => {
    const renewUrl = `${process.env.NEXTAUTH_URL}/dashboard/subscription`;
    const formattedEndDate = endDate.toLocaleDateString('id-ID', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    const emailHtml = await render(SubscriptionExpiredEmail({
      firstName,
      planName,
      endDate: formattedEndDate,
      renewUrl,
    }));

    return sendEmail({
      to: email,
      subject: `Action Required: Your ${planName} subscription has expired`,
      html: emailHtml,
      text: `Hi ${firstName}, your ${planName} subscription expired on ${formattedEndDate}. Please renew to continue. Renew here: ${renewUrl}`,
    });
  },

  // Additional email methods for your job board system
  sendJobApplicationConfirmation: async (
    email: string,
    firstName: string,
    jobTitle: string,
    companyName: string
  ) => {
    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">Application Submitted Successfully</h2>
        <p>Hi ${firstName},</p>
        <p>Your application for <strong>${jobTitle}</strong> at <strong>${companyName}</strong> has been submitted successfully.</p>
        <p>We'll notify you once the company reviews your application.</p>
        <p>Best regards,<br>The Job Board Team</p>
      </div>
    `;

    return sendEmail({
      to: email,
      subject: `Application Submitted: ${jobTitle}`,
      html,
      text: `Hi ${firstName}, your application for ${jobTitle} at ${companyName} has been submitted successfully.`,
    });
  },

  sendApplicationStatusUpdate: async (
    email: string,
    firstName: string,
    jobTitle: string,
    companyName: string,
    status: string
  ) => {
    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">Application Status Update</h2>
        <p>Hi ${firstName},</p>
        <p>Your application for <strong>${jobTitle}</strong> at <strong>${companyName}</strong> has been <strong>${status}</strong>.</p>
        <p>Please check your dashboard for more details.</p>
        <p>Best regards,<br>The Job Board Team</p>
      </div>
    `;

    return sendEmail({
      to: email,
      subject: `Application Update: ${jobTitle}`,
      html,
      text: `Hi ${firstName}, your application for ${jobTitle} at ${companyName} has been ${status}.`,
    });
  },

  sendInterviewScheduled: async (
    email: string,
    firstName: string,
    jobTitle: string,
    companyName: string,
    interviewDate: Date,
    location: string,
    interviewType: string
  ) => {
    const formattedDate = interviewDate.toLocaleDateString('id-ID', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">Interview Scheduled</h2>
        <p>Hi ${firstName},</p>
        <p>Great news! You have been selected for an interview for the position of <strong>${jobTitle}</strong> at <strong>${companyName}</strong>.</p>
        <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <h3>Interview Details:</h3>
          <p><strong>Date & Time:</strong> ${formattedDate}</p>
          <p><strong>Type:</strong> ${interviewType}</p>
          <p><strong>Location:</strong> ${location}</p>
        </div>
        <p>Please make sure to be available at the scheduled time. Good luck!</p>
        <p>Best regards,<br>The Job Board Team</p>
      </div>
    `;

    return sendEmail({
      to: email,
      subject: `Interview Scheduled: ${jobTitle}`,
      html,
      text: `Hi ${firstName}, your interview for ${jobTitle} at ${companyName} is scheduled for ${formattedDate} (${interviewType}) at ${location}.`,
    });
  },

  sendSubscriptionExpiring: async (
    email: string,
    firstName: string,
    planName: string,
    expiryDate: Date
  ) => {
    const formattedDate = expiryDate.toLocaleDateString('id-ID');

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">Subscription Expiring Soon</h2>
        <p>Hi ${firstName},</p>
        <p>Your <strong>${planName}</strong> subscription is expiring on <strong>${formattedDate}</strong>.</p>
        <p>To continue enjoying premium features, please renew your subscription.</p>
        <p><a href="${process.env.NEXTAUTH_URL}/dashboard/subscription" style="background: #007bff; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block;">Renew Subscription</a></p>
        <p>Best regards,<br>The Job Board Team</p>
      </div>
    `;

    return sendEmail({
      to: email,
      subject: 'Subscription Expiring Soon',
      html,
      text: `Hi ${firstName}, your ${planName} subscription is expiring on ${formattedDate}. Please renew to continue enjoying premium features.`,
    });
  },
};