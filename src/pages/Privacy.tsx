import { Link } from "react-router-dom";

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white text-black">
      <div className="max-w-4xl mx-auto px-4 py-8 text-sm leading-6 space-y-6">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="italic">Last Updated: May 12, 2025</p>

        {/* Section 1: Introduction */}
        <section>
          <h2 className="text-xl font-semibold">1. Introduction</h2>
          <p>
            Pulse is a dating platform operated by PulseDate Technologies Ltd.,
            a company registered in Cyprus. We are committed to protecting your
            privacy and handling your personal data in a transparent and secure
            manner. This Privacy Policy explains how we collect, use, store, and
            share your information when you use the Pulse website or mobile
            application (the "Platform"). By using Pulse, you agree to the
            practices described in this Policy and also acknowledge our{" "}
            <Link to="/terms" className="underline">
              Terms of Service
            </Link>{" "}
            which include important information on membership eligibility and
            fees.
          </p>
          <p>
            Eligibility and Verification: Pulse is strictly for adults 18 years
            and older. We require all members to undergo a face verification via
            live video as part of our sign-up process. This human-reviewed
            verification is to confirm your identity and age, helping us
            maintain a safe, genuine community. We reserve the right to approve
            or deny membership at our discretion. (Please note: if an applicant
            is denied access or an account is terminated for violating our
            guidelines, any membership fees paid are non-refundable as per our
            Terms and Conditions.)
          </p>
          <p>
            If you do not agree with this Privacy Policy, please do not use
            Pulse. If you have any questions or concerns about how we handle
            your data, you can contact us using the information provided at the
            end of this document.
          </p>
        </section>

        {/* Section 2: Scope of This Privacy Policy */}
        <section>
          <h2 className="text-xl font-semibold">
            2. Scope of This Privacy Policy
          </h2>
          <p>
            This Privacy Policy applies to all services offered under the Pulse
            brand, including our website, mobile applications, and any related
            services or events operated by PulseDate Technologies Ltd. It covers
            the personal data of users who register an account or use our
            Platform, as well as visitors to our website. Third-party websites
            or services that you may access through Pulse (for example, external
            payment processors) are not governed by this Policy; we encourage
            you to review the privacy policies of any third-party services
            separately. PulseDate Technologies Ltd. is the “data controller” of
            your personal data processed in connection with the Platform,
            meaning we determine how and why your personal data is used in the
            context of Pulse.
          </p>
        </section>

        {/* Section 3: Information We Collect */}
        <section>
          <h2 className="text-xl font-semibold">3. Information We Collect</h2>
          <p>
            We collect various types of information from you and about you in
            order to operate the Pulse platform and provide our services. This
            includes information you provide directly, data collected
            automatically when you use Pulse, and information generated through
            verification and user actions. We limit our collection to only what
            is necessary for the purposes set out in this Policy (often referred
            to as data minimization). Below is a breakdown of the categories of
            personal information we collect:
          </p>
          <h3 className="text-lg font-medium mt-4">Information You Provide</h3>
          <ul className="list-disc pl-6">
            <li>
              <strong>Registration and Profile Data:</strong> When you create a
              Pulse account, we collect basic personal details required for
              registration and profile creation. This may include your full
              name, email address, phone number, date of birth, gender, location
              (e.g. city or region), and a short bio or personal description.
              You may also provide additional profile details such as your
              interests, relationship preferences, occupation, or other
              information to complete your dating profile. This information is
              necessary to set up your account and allow you to connect with
              other members.
            </li>
            <li>
              <strong>Photos and Content:</strong> You are allowed to upload
              public photos and private photos to your profile. Public photos
              are visible to other verified members on the Platform by default,
              while private photos remain hidden and are only shareable with
              specific users you select. All photos and any other content you
              submit (such as profile descriptions or prompts) are subject to
              review by Pulse’s team to ensure they meet our content standards
              and community guidelines. We do not allow content that is illegal,
              pornographic, harassing, or otherwise violates our policies. If
              your photos or content are flagged or reported, we may review and
              remove them and possibly take action on your account in accordance
              with our Terms. Keep in mind that even private photos, once you
              choose to share them with another user, will become visible to
              that user.
            </li>
            <li>
              <strong>Identity Verification Data:</strong> To maintain a high
              level of trust and safety, Pulse requires identity verification
              for all users. As part of this process, we may collect live video
              recordings or snapshots of you via the in-app verification video
              session. During this face verification, you may be asked to
              perform certain actions on camera (for example, turning your head
              or saying a phrase) so our team can confirm you are a real person
              and that you match the photos on your profile. In some cases, we
              might request an official ID document to verify your age or
              identity (e.g. a passport or driver’s license), but generally the
              live video is our primary verification method. The video
              verification data (and any ID images, if provided) are used
              exclusively for identity and age verification purposes. This data
              is reviewed by authorized Pulse staff (human reviewers) and is
              kept confidential. We do not use verification videos for facial
              recognition matching against other databases; it’s purely a manual
              review to confirm you are who you claim to be.
            </li>
            <li>
              <strong>Communications and Messages:</strong> When you interact
              with other users or with us, we collect the content of those
              communications. This includes chat messages and conversations you
              have with matches on Pulse. You have the ability to delete
              conversations from your account for privacy or convenience; once
              deleted, those messages will no longer be visible to you in the
              app. Pulse may retain logs of messaging activity for a limited
              period as needed for safety and legal compliance, as described in
              the Data Retention section. We also collect communications you
              send to Pulse’s support or moderation team, such as emails or
              contact form submissions when you ask for help or give feedback.
            </li>
            <li>
              <strong>User Actions and Feedback:</strong> We record information
              related to actions you take on the Platform for safety and
              user-experience purposes. For example, if you block another user,
              we will note that action (so that the blocked user can no longer
              contact you or view your profile). If you report a user for
              misconduct, we will collect the details of that report, including
              the identity of the reported user and any written explanation you
              provide describing the issue. Reports may include personal
              opinions or descriptions of another user’s behavior and are used
              to investigate and enforce our Community Guidelines. Similarly, if
              we request feedback through surveys or if you participate in any
              promotions (like contests or polls), any information you choose to
              provide will be collected and associated with your account.
              Participation in such activities is voluntary.
            </li>
            <li>
              <strong>Payment Information:</strong> Pulse may offer premium
              features or memberships that require payment. All payments on
              Pulse are processed through trusted third-party payment providers.
              We do not collect or store your full payment card details on our
              servers. When you make a purchase, you will provide your payment
              information (credit card number, etc.) directly to the third-party
              processor via a secure checkout. The only payment-related data
              Pulse receives and retains is limited information such as: the
              type of subscription or purchase, the date and time of the
              transaction, the amount paid, and a confirmation that the payment
              was successful. We may also receive a transaction ID or a partial
              card identifier (e.g., the last 4 digits of your card or a token)
              from the payment processor, which we keep for record-keeping,
              receipt generation, and to link your purchase to your account. All
              such payment processing is subject to the third-party’s privacy
              policy as well. We encourage you to review the payment provider’s
              terms and privacy policy for information on their data practices.
            </li>
          </ul>
          <h3 className="text-lg font-medium mt-4">
            Information Collected Automatically
          </h3>
          <p>
            When you use Pulse, our systems automatically collect certain
            technical information about your device and how you interact with
            the Platform. This data helps us understand usage patterns, secure
            the Platform, and improve our services. The information we collect
            automatically includes:
          </p>
          <ul className="list-disc pl-6">
            <li>
              <strong>Device and Usage Data:</strong> We collect data about the
              device and app or browser you use to access Pulse. This may
              include your device type or model (e.g., iPhone 12, Samsung
              Galaxy, PC, etc.), operating system and version (e.g., iOS 16,
              Android 12, Windows 10), unique device identifiers or mobile IDs,
              browser type and version (if on web), preferred language, and the
              app version of Pulse you are running. We also log usage details
              such as the dates and times you log in or access the Platform,
              features you use (e.g., profile browsing, messaging, etc.), pages
              or screens visited, clicks and interactions, and the referring
              webpage or app (if you arrived via an external link). This usage
              data is collected to help us troubleshoot issues, analyze trends
              in how users navigate the Platform, and make improvements. It also
              assists in detecting suspicious behavior (for example, rapid
              swiping or messaging that could indicate a bot).
            </li>
            <li>
              <strong>IP Address and Network Information:</strong> When you
              connect to Pulse, our servers record the Internet Protocol (IP)
              address of your device. An IP address is a number that can
              indicate your general geographic location (at least country, and
              often city/region) and your internet service provider. We use IP
              addresses for purposes such as: protecting against fraudulent or
              unauthorized access, ensuring users are not in prohibited
              jurisdictions, and customizing the experience (for example,
              showing you potential matches in your general region, if our
              service uses location context). In addition to IP, we may collect
              metadata like device network type (WiFi, cellular), and browser
              headers that include data about how your device communicates
              (which can help in identifying bots or ensuring compatibility with
              our service).
            </li>
            <li>
              <strong>Device Fingerprinting:</strong> We collect device-specific
              data such as hardware model, operating system version, unique
              device identifiers, and mobile network information to assist with
              fraud prevention and user verification.
            </li>
            <li>
              <strong>User Communication Moderation:</strong> Certain user
              interactions, including messages and media, may be scanned
              automatically or flagged for manual review in accordance with our
              moderation and safety procedures.
            </li>
            <li>
              <strong>Payment Disputes and Collection Disclosure:</strong> In
              the event of a payment dispute or chargeback, we may use your
              personal data (e.g., transaction logs, IP address, activity
              history) to verify use and respond to your payment provider. We
              reserve the right to share this data with collections agencies
              where applicable.
            </li>
            <li>
              <strong>Legal Basis for Processing:</strong> We process your
              personal data under the following legal bases:
            </li>
            <ul className="list-disc pl-6">
              <li>Consent – e.g., for marketing or optional data fields.</li>
              <li>
                Contractual necessity – e.g., account creation and service
                provision.
              </li>
              <li>
                Legitimate interests – e.g., fraud prevention, platform safety,
                and internal analytics.
              </li>
              <li>
                Legal obligations – e.g., compliance with law enforcement or
                regulatory requirements.
              </li>
            </ul>
            <li>
              <strong>Cross-Border Data Transfers:</strong> PulseDate
              Technologies Ltd. may process or access personal data from
              locations outside the European Economic Area (EEA). When we do, we
              ensure that appropriate safeguards, such as standard contractual
              clauses, are in place to protect your data in accordance with
              applicable law.
            </li>
            <li>
              <strong>Data Retention Policy:</strong> We retain your data as
              long as your account is active or as needed to provide services,
              comply with legal obligations, resolve disputes, or enforce our
              agreements. If you delete your account, your data will be purged
              or anonymized within 30 days, unless longer retention is required
              by law.
            </li>
            <li>
              <strong>Cookies and Similar Technologies:</strong> We may use
              cookies and similar tracking technologies to enhance your
              experience on the Platform. These may include both essential
              cookies (used for functionality like maintaining login sessions)
              and, where applicable, non-essential cookies (such as those used
              for analytics or advertising). Any cookies we deploy are subject
              to compliance with applicable laws. You will be given the
              opportunity to manage your cookie preferences, and where required,
              we will obtain your consent via a cookie banner or preferences
              center.
            </li>
            <li>
              <strong>Analytics Data:</strong> We may automatically collect and
              aggregate certain data about how users interact with Pulse for
              internal analytics. This can include statistical information such
              as the number of new sign-ups per day, the average number of
              messages sent by users, feature usage frequency, crash logs, and
              performance metrics. This analytics data is anonymized or
              aggregated, meaning it does not identify you personally. For
              example, we might track overall app engagement or demographic
              trends (e.g., percentage of users in different age ranges) without
              linking this information to specific user profiles. Anonymized
              analytics help us understand our user base and improve the
              platform (for instance, by highlighting popular features or
              identifying areas that need improvement). We ensure that any
              analytics we share externally (such as with potential partners or
              in marketing) will remain in aggregated form and not contain
              personal data.
            </li>
          </ul>
        </section>

        {/* Section 4: How We Use Your Information */}
        <section>
          <h2 className="text-xl font-semibold">
            4. How We Use Your Information
          </h2>
          <p>
            PulseDate Technologies Ltd. uses the collected personal information
            for the following purposes, all in accordance with applicable data
            protection laws (like the GDPR). We process your data only when we
            have a valid legal basis to do so, such as fulfilling our contract
            with you (providing the Pulse service), complying with legal
            obligations, protecting vital interests, or pursuing legitimate
            interests (for example, improving our services or preventing fraud)
            – and in some cases, based on your consent (e.g., for certain
            optional features). Below we outline the specific ways in which we
            use your information:
          </p>
          <ul className="list-disc pl-6">
            <li>
              <strong>To Provide and Maintain the Service:</strong> We use your
              registration and profile information to create your account and
              personalize your experience on Pulse. For example, we use your
              profile data (age, gender, location, preferences) to show you
              relevant match suggestions and to allow other users to see your
              profile (public information like first name, age, bio, and public
              photos) in the member area. Your information allows us to
              facilitate interactions – when you swipe, like, or express
              interest in someone, or when you send and receive messages, our
              systems use your data to carry out those actions and deliver
              content to the intended recipient. Essentially, all core
              functionalities of the dating platform (profile browsing,
              matching, messaging, sharing private photos with permission, etc.)
              rely on processing your data as you provide it.
            </li>
            <li>
              <strong>Identity Verification and Safety Checks:</strong> We use
              the face verification video and any provided ID documents to
              verify that you are a real, unique individual of at least 18 years
              of age, and to confirm that the photos and information on your
              profile are authentic. This is crucial for maintaining a
              trustworthy community and is a step all users must pass before
              gaining full access to Pulse. Our team reviews the verification
              data to approve or reject accounts. During this process, we may
              also use your information to perform checks against our internal
              records (to ensure, for instance, that a banned user is not trying
              to re-register) or possibly against public watchlists if required
              (e.g., to comply with sanctions or sex offender registry checks,
              where legally applicable). The outcome of these checks (verified
              status or denial) is recorded. If you are denied access, we use
              your data to inform you and enforce that decision (which may
              include retaining certain info like your email or device ID to
              prevent circumvention of our controls). All verification-related
              processing is conducted under strict confidentiality and solely to
              protect user safety and compliance with our age restriction
              policy.
            </li>
            <li>
              <strong>
                Enable Profile Visibility and Interaction (with Privacy
                Controls):
              </strong>
              Pulse is designed so that only verified and approved members can
              view other profiles. Once you are verified, your profile
              (including your first name, age, general location, bio, and public
              photos) becomes visible to the community of other verified Pulse
              users. We use your data to facilitate this controlled sharing: for
              instance, if you upload private photos and later choose to share
              them with a specific match, we will make those photos accessible
              to that particular user (and only them). We also ensure that if
              you update or remove information (like deleting a photo or editing
              your bio), the changes propagate to anyone viewing your profile.
              When you block someone, we use your data to enforce that block
              (meaning your profile is hidden from them and vice versa, and you
              two cannot communicate). When you report someone, we use the
              information in your report to investigate the issue, which might
              include reviewing both users' profiles and activity (including
              message history or photos) to determine what action to take, if
              any. Overall, we use your data to orchestrate the complex but
              privacy-conscious interactions on Pulse: letting the right people
              see what they're allowed to see, and protecting your information
              from those who should not have access.
            </li>
            <li>
              <strong>Communication and Customer Support:</strong> We may use
              your email address and/or in-app notifications to communicate with
              you about important service-related matters. This includes sending
              verification results (e.g., a notice that your account has been
              verified or if it failed verification), transaction receipts for
              any payments, alerts or warnings if you violate guidelines, and
              general account notifications (such as password resets, login
              alerts, or changes to this Privacy Policy or our Terms). We might
              also send updates about new features or improvements to the
              Platform. If you contact our support team with a question or
              issue, we will use your provided information and our internal data
              (like your profile details or logs) to respond and resolve your
              request. We keep records of our communications with you (such as
              support emails or chat transcripts) to better assist you in the
              future and to improve our support processes. We will not send you
              marketing or promotional emails without your consent. If you
              opt-in to marketing communications (for example, newsletters or
              special offers), you can always opt-out later through an
              unsubscribe link or by adjusting your account preferences.
            </li>
            <li>
              <strong>Payments and Subscription Management:</strong> If you
              purchase a premium membership or any paid feature, we use the
              information about your purchase to enable access to those features
              (for example, upgrading your account status to premium, unlocking
              additional functionality, or crediting your account with purchased
              tokens/features). We will use your account data to maintain a
              history of your purchases and manage any recurring subscriptions
              (e.g., to remind you of upcoming renewals or to process
              cancellation requests). We rely on third-party payment processors
              for the financial transaction, but within Pulse we use your data
              to reflect accurate account status (paid vs. free) and to provide
              customer service related to billing (like troubleshooting a failed
              payment or refund inquiries according to our Terms). As noted,
              sensitive payment info is handled by the payment processor and not
              stored by us.
            </li>
            <li>
              <strong> Personalization and Matching:</strong> Pulse may use your
              profile information, preferences, and usage behavior to
              personalize your experience. For instance, we might prioritize
              showing you profiles of other users who are in your region, within
              your selected age range, or who share common interests indicated
              on profiles. We may also use your in-app activity (such as who you
              liked or skipped) to refine future match suggestions through our
              matching algorithms. All such processing is aimed at improving the
              relevance of your potential matches and is typically based on
              legitimate interests (improving the service for users) or
              performance of our contract (providing the core matchmaking
              service you signed up for). This personalization is done within
              the platform and we do not share your personal data with
              advertisers for external ad targeting.
            </li>
            <li>
              <strong>Analytics and Platform Improvement:</strong> We internally
              analyze aggregated user data and feedback to understand how our
              Platform is used. For example, we might measure the average number
              of matches per user, or identify that a new feature is underused,
              or analyze the effectiveness of our verification process. For
              these analytical purposes, we use largely de-identified or
              aggregated data (so the analysis is not focused on you
              individually, but on patterns among many users). This helps us
              spot trends, fix bugs, and make informed decisions about new
              features or policy changes. In some cases, we may look at specific
              data (like a specific user’s experience) if investigating a bug or
              user report, but we limit access to personal data in analytics to
              authorized personnel only. Overall, this use of data is to
              continuously improve the quality, safety, and performance of
              Pulse.
            </li>
            <li>
              <strong>Moderation and Legal Compliance:</strong> Your information
              (profile details, messages, etc.) may be processed as needed to
              enforce our Community Guidelines and Terms of Service. For
              instance, if content you post is reported or suspected to violate
              our rules (e.g., hate speech, nudity, scams), our moderators will
              review the relevant data (which could include your profile info
              and the specific content like a photo or chat message). We use
              personal data in this context to make determinations about
              warnings, content removal, or account suspension/ban.
              Additionally, we may process and preserve certain data to comply
              with legal obligations. Examples: maintaining records of consents
              you gave (to comply with data protection laws), retaining
              transaction records for accounting and tax regulations, or
              responding to lawful requests from authorities. We also use data
              to prevent fraud, crime or other misuse of the Platform - this can
              include using device information, IP addresses, and behavioral
              signals to detect multiple accounts, bots, or malicious
              activities. If necessary, we will use personal data to investigate
              security incidents or attempts to compromise our systems and take
              appropriate countermeasures. In rare cases, we might need to
              process data to protect someone's vital interests (e.g., if we
              have credible information about self-harm or threats, we might
              provide data to authorities to prevent harm, as allowed by law).
            </li>
            <li>
              <strong>Advertising and Future Marketing:</strong> Currently,
              Pulse does not share personal data with third-party advertisers
              nor do we display third-party banner ads on the Platform. Should
              we in the future introduce advertising or partnerships, any use of
              your data for advertising purposes will be subject to this Privacy
              Policy and, where required, your consent. For instance, we might
              show promotional offers from Pulse or partner events to our users,
              but you would have the ability to opt out of marketing
              communications. If any personal data (like your basic demographics
              or usage patterns) are used to tailor advertisements within the
              app, we will do so under a legitimate interest basis and with
              respect for your privacy (likely using aggregated info). We will
              not sell or rent your personal information to third parties for
              their own marketing or advertising purposes.
            </li>
          </ul>
          <p>
            In all cases, we strive to apply the principle of data minimization,
            using the least amount of data necessary and purpose limitation,
            ensuring we only use your data for the purposes we've described. If
            we plan to use your personal data for any new purpose not outlined
            above, we will update this Policy and, if required, seek your
            consent.
          </p>
        </section>

        {/* Section 5: How We Share Your Information */}
        <section>
          <h2 className="text-xl font-semibold">
            5. How We Share Your Information
          </h2>
          <p>
            Pulse understands that your personal information is important and we
            are careful about how we share it. We do not sell your personal data
            to third parties. We only share information in certain
            circumstances, and always with proper protections in place. The main
            instances where data sharing occurs are described below:
          </p>
          <ul className="list-disc pl-6">
            <li>
              <strong>Sharing with Other Pulse Users:</strong> The primary
              sharing of data in our platform is you with other users, as part
              of the dating service. By creating a Pulse profile, certain
              information from your profile will be visible to other members.
              This includes your first name, age, general location (e.g., city
              or country, not your precise address), gender, profile bio, and
              public photos. Importantly, only users who have themselves been
              verified and approved can see your profile and information.
              Unverified users or outsiders cannot browse member profiles, which
              adds a layer of privacy and security. If you choose to share your
              private photos with another member (a feature you control), those
              photos will become viewable by that member. Similarly, when you
              engage in a conversation with a match, the messages you send are
              visible to that recipient. We design the Platform such that
              personal communications (messages, private photo shares) are
              peer-to-peer within the app environment – meaning they are
              intended only for the people involved, not publicly broadcast.
              However, keep in mind that we cannot prevent a recipient of your
              information from saving or capturing what you share (e.g., taking
              a screenshot of a photo or chat). We advise you to only share
              content that you are comfortable with and that complies with our
              guidelines. Aside from what you intentionally share with other
              members, no other user has access to your personal data (for
              example, your email or full name are not disclosed to other users
              by Pulse).
            </li>
            <li>
              <strong>Service Providers and Partners:</strong> We use trusted
              third-party companies to help us operate and improve Pulse. These
              service providers perform tasks on our behalf and under our
              instructions, and they include:
            </li>
            <li>
              <strong>Hosting and Infrastructure:</strong> Companies that
              provide cloud servers, data center storage, and database services
              for our Platform (ensuring Pulse is available online 24/7). For
              example, we might use reputable cloud providers to host our
              applications and data. These providers may process and store
              personal data as part of their service to us, but they are not
              allowed to use your data for anything other than giving us the
              infrastructure we need. We contractually require them to protect
              your data and to comply with strict confidentiality and security
              standards.
            </li>
            <li>
              <strong>Verification Services:</strong> While our face
              verification is primarily done in-house by human review, we may
              use third-party tools or services to assist with identity
              verification or fraud prevention. For instance, we might use a
              third-party system to help ensure the video feed is live (liveness
              detection) or to check the authenticity of an ID if one is
              provided. Any such service would receive only the data necessary
              (e.g., the video or ID image) and would be contractually bound to
              use it solely for verification and then delete it. In many cases,
              however, our own staff conduct the review and the data stays
              within Pulse's systems.
            </li>
            <li>
              <strong>Payment Processors:</strong> As noted, when you make
              purchases, your payment is processed by third-party payment
              gateways (like Stripe, PayPal, or others). These entities will
              handle your credit card or bank information on their secure
              servers. They may share with us limited information such as a
              confirmation of payment or subscription status so that we can
              update your account. We do not receive your full financial account
              details from them. We ensure any payment partner we use is PCI-DSS
              compliant (a strict security standard for payment data).
            </li>
            <li>
              <strong>Communications and Support Tools:</strong> We may use
              third-party platforms to send emails or SMS messages (for example,
              an email service for sending verification emails or a text message
              service for sending a login code). We might also use customer
              support software to manage help tickets or chat conversations when
              you contact support. These providers would process your contact
              information and the content of the communication as needed to
              fulfill their function (e.g., sending you the email). All such
              providers are vetted for strong privacy practices.
            </li>
            <li>
              <strong>Analytics and Improvement:</strong> If in the future we
              employ analytics tools or crash reporting services (like Google
              Analytics, Firebase, etc.), these might collect information like
              app usage data, device identifiers, or crash logs on our behalf to
              help us troubleshoot and understand user behavior. Any data shared
              with such providers will be anonymized where possible and not used
              to identify you individually. We currently focus on in-house
              aggregate analytics, but if we integrate external analytics, it
              will be under strict agreements.
            </li>
            <li>
              In all cases, our service providers are given only the minimum
              data necessary to perform their tasks, and they are prohibited
              from using your data for other purposes. They also must adhere to
              privacy and security obligations consistent with this Policy and
              applicable law.
            </li>
            <li>
              <strong>Corporate Affiliates:</strong> At present, PulseDate
              Technologies Ltd. does not have a family of affiliate companies
              (aside from itself) to share data with. If in the future PulseDate
              Technologies Ltd. becomes part of a group of related companies or
              is acquired by or merged with another company, we may share your
              information within that corporate family. For example, if Pulse
              were to open regional subsidiaries or partner with a parent
              company operating multiple dating platforms, we might share data
              to improve services or ensure bad actors banned on one platform
              are also banned on others (a practice to enhance user safety
              across platforms). If such sharing occurs, we will ensure that any
              affiliated entities uphold privacy protections at least as
              stringent as those in this Policy, and we will update you or seek
              consent as required by law.
            </li>
            <li>
              <strong>Legal Compliance and Protection:</strong> We may disclose
              personal information when we believe, in good faith, that such
              disclosure is necessary to comply with a legal obligation or valid
              legal process. This includes responding to court orders,
              subpoenas, or lawful requests by government authorities (including
              to meet national security or law enforcement requirements). If law
              enforcement or regulatory agencies formally request data and have
              the proper authority, we may provide the requested information,
              which could include profile data, usage logs, messages, or any
              relevant information we have, but only if we are legally compelled
              to do so. Additionally, we may share information if we believe it
              is necessary to investigate or enforce our Terms and community
              guidelines, to detect or prevent fraud, security issues, or other
              harm against Pulse, our users, or the public. For example, if
              required to investigate illegal activities, or if someone’s safety
              is at risk, we might share data with law enforcement. We will
              carefully review each request to ensure it has appropriate legal
              basis and scope before disclosing any data. Where allowed, we may
              inform users of such requests or disclosures.
            </li>
            <li>
              <strong>Business Transfers:</strong> In the event that PulseDate
              Technologies Ltd. undergoes a business transaction such as a
              merger, acquisition by another company, reorganization, or sale of
              some or all of its assets, user information (including personal
              data) might be among the assets transferred to or shared with the
              involved parties. For instance, if another company acquires Pulse
              or if we partner to offer co-branded services, your information
              may be transferred so that the service can continue under new
              ownership. In such cases, we will ensure the new owner respects
              your personal data in line with this Privacy Policy or provides at
              least equivalent protections. We will notify you (for example, via
              email or a notice on the Platform) of any change in ownership or
              uses of your personal information, as well as any choices you may
              have regarding your personal data as a result of the transfer.
            </li>
            <li>
              <strong>With Your Consent:</strong> Apart from the situations
              above, we will ask for your consent before sharing your personal
              data with third parties in any scenario that is not already
              covered by this Privacy Policy. For example, if we ever want to
              post a user testimonial with your name or profile, or share your
              details for some promotional collaboration, we would only do so if
              you agree. You are in control of your information, and we will
              honor the permissions you give us. If you opt into any specific
              data sharing arrangement, you can always opt out later by
              withdrawing your consent, and we will cease the data sharing going
              forward.
            </li>
          </ul>
          <p>
            In summary, Pulse shares your data only in limited ways that enable
            us to run and protect the service, or as required by law. We do not
            engage in selling personal information to data brokers or
            telemarketers. When we do share data (such as with service providers
            or within a future corporate group), we remain responsible for your
            information and ensure it is used only for legitimate, intended
            purposes aligned with those described in this Policy.
          </p>
        </section>

        {/* Section 6: Cookies and Tracking Technologies */}
        <section>
          <h2 className="text-xl font-semibold">
            6. Cookies and Tracking Technologies
          </h2>
          <p>
            Pulse may use cookies and similar tracking technologies to enhance
            your experience on the Platform, support essential functionality,
            and help us understand usage patterns. These technologies allow us
            to keep you logged in, remember your preferences, improve
            performance, and ensure the security and reliability of the service.
          </p>
          <p>Types of Cookies Used:</p>
          <ul className="list-disc pl-6">
            <li>
              <strong>Essential Cookies:</strong> These are necessary for the
              Platform to function properly. For example, we use session cookies
              to maintain your login state as you navigate through different
              sections of the app or website. These cookies do not track your
              activity across other websites and are exempt from consent
              requirements under most privacy laws.
            </li>
            <li>
              <strong>Preference Cookies:</strong> These cookies store your
              language settings or interface preferences to tailor the app or
              website to your needs.
            </li>
            <li>
              <strong>Analytics Cookies:</strong> Where enabled, we may use
              analytics tools to understand how users interact with the
              Platform. These cookies help us measure things like page views,
              feature usage, and app performance. In such cases, we either
              anonymize the data or aggregate it to avoid identifying individual
              users.
            </li>
          </ul>
          <p>
            We aim to keep tracking minimal and privacy-conscious. Any
            non-essential cookies (such as analytics or marketing cookies) will
            only be used where permitted by applicable law and, where required,
            only after we obtain your consent via a cookie banner or settings
            interface.
          </p>
          <p>
            <strong>Third-Party Cookies:</strong> Pulse does not currently allow
            third-party advertisers or marketing partners to place tracking
            cookies on our Platform. However, if you interact with external
            links (such as payment providers or partner services), those
            third-party websites may use their own cookies, governed by their
            respective privacy policies.
          </p>
          <p>
            <strong>Cookie Controls and Consent:</strong> You will have the
            ability to manage your cookie preferences via our cookie banner or
            app settings, where applicable. Essential cookies cannot be
            disabled, but you can choose to disable or opt out of non-essential
            cookies at any time.
          </p>
          <p>
            <strong>Similar Technologies in Mobile Apps:</strong> In our mobile
            apps, we may use technologies functionally similar to cookies, such
            as in-app storage or SDK-based identifiers, for purposes such as
            keeping you logged in or collecting crash reports. These are handled
            with the same principles of minimal, privacy-conscious use.
          </p>
          <p>
            <strong>Do Not Track:</strong> Some browsers offer a "Do Not Track"
            (DNT) setting. While we do not currently track users across
            third-party websites, our Platform does not change its behavior in
            response to DNT signals. If we introduce cross-site tracking in the
            future, we will provide appropriate opt-out mechanisms.
          </p>
          <p>
            In summary, we use cookies and related technologies to support
            essential platform functionality and improve the user experience,
            while prioritizing your privacy. We will always inform you and
            obtain your consent if we expand cookie use beyond what is described
            here.
          </p>
        </section>

        {/* Section 7: Data Security */}
        <section>
          <h2 className="text-xl font-semibold">7. Data Security</h2>
          <p>
            We take the security of our users’ personal data very seriously.
            PulseDate Technologies Ltd. has implemented a range of technical and
            organizational security measures to protect your information from
            unauthorized access, alteration, disclosure, or destruction. While
            no system can be guaranteed to be completely secure, we strive to
            employ industry best practices to safeguard your data. Our security
            approach includes:
          </p>
          <ul className="list-disc pl-6">
            <li>
              <strong>Encryption:</strong> All data transmitted between your
              device and Pulse servers is encrypted using Secure Sockets Layer
              (SSL)/Transport Layer Security (TLS) technology. This means that
              when you enter personal information into the app or website (such
              as login credentials or profile data), it is encoded so that it
              cannot be read by third parties while in transit over the
              internet. Similarly, we encrypt sensitive data at rest in our
              databases and storage. User passwords are stored using strong
              one-way hashing algorithms (we never store plaintext passwords),
              and other sensitive fields may be encrypted at the database level.
              For example, if we store verification images or any biometric
              identifiers, those are kept in encrypted form with restricted
              access.
            </li>
            <li>
              <strong>Access Controls:</strong> We limit access to personal data
              strictly to personnel and contractors who need it to perform their
              job duties (the “need-to-know” principle). For instance, our
              verification team members can access your verification video and
              profile data to do their review, but they may not have access to
              other unrelated data. Customer support agents may access your
              account info and chat history when assisting you, but only for
              accounts they are helping with. All staff with access to personal
              data are bound by confidentiality obligations and trained on data
              protection best practices. We also employ role-based access
              control and authentication measures for our internal systems to
              prevent unauthorized internal access.
            </li>
            <li>
              <strong>Security Testing and Protocols:</strong> We regularly
              update and patch our software, backend servers, and third-party
              libraries to address security vulnerabilities. Pulse employs
              firewalls and network monitoring to guard against external
              attacks. We conduct periodic security audits and may use
              independent third-party experts to test our systems (penetration
              testing) for weaknesses. Our development practices include code
              reviews and quality assurance testing focusing on security. Data
              input fields are validated and protected against common web
              attacks (like SQL injection or cross-site scripting). When we
              implement new features, we evaluate their security impact on the
              overall system.
            </li>
            <li>
              <strong>Data Segmentation and Pseudonymization:</strong> Where
              feasible, we separate certain personal data from direct
              identifiers. For example, our analytics databases may reference
              user IDs rather than full names to reduce exposure of identifiable
              information. When generating aggregate statistics or reports, we
              use anonymized data. For highly sensitive data (such as
              verification materials or any biometric data), we isolate these
              from the main user database and apply additional security layers
              (limited access keys, audit logging of any access, etc.). By
              compartmentalizing data, we minimize the risk that a single breach
              could expose all your information.
            </li>
            <li>
              <strong>Physical and Environmental Security:</strong> If and when
              personal data is stored on physical servers (or in cloud
              infrastructure), those environments are secured. Our cloud
              providers maintain robust physical security at data centers (guard
              patrols, badge or biometric access, surveillance, etc.). For any
              in-house equipment, we keep them in controlled facilities. Data
              backups (for disaster recovery) are encrypted and stored securely.
              We ensure that old storage media or hardware are properly wiped or
              destroyed before disposal.
            </li>
            <li>
              <strong>Monitoring and Incident Response:</strong> We actively
              monitor for suspicious activity on user accounts and our systems.
              Unusual login patterns, multiple failed login attempts, or other
              potential signs of unauthorized access may trigger alerts or
              protective measures (such as temporarily locking an account or
              prompting re-verification). In the event of a data breach or
              security incident that affects personal data, we have an incident
              response plan to quickly mitigate the issue, secure the system,
              and assess impact. As required by law, we would notify users and
              relevant authorities of certain breaches. For example, under the
              GDPR, if a breach is likely to result in a high risk to your
              rights and freedoms, we will inform you without undue delay.
            </li>
            <li>
              <strong>User Responsibilities:</strong> We also advise our users
              to take steps in protecting their own accounts. Choose a strong,
              unique password for Pulse and do not share it with others. Be
              cautious about giving out your personal information to people you
              meet on the platform – Pulse will never ask you for your password
              or full payment details via email or messaging. If you suspect
              that someone has gained unauthorized access to your account or if
              you notice any suspicious activity, please contact us immediately
              so we can help secure your account.
            </li>
          </ul>
          <p>
            Despite all these measures, it's important to understand that no
            online service can ever be 100% secure. However, we continuously
            update our security practices to counter emerging threats and to
            protect your privacy. Your trust is paramount to us, and we work
            hard every day to maintain the security and integrity of the Pulse
            platform.
          </p>
        </section>

        {/* Section 8: Data Retention */}
        <section>
          <h2 className="text-xl font-semibold">8. Data Retention</h2>
          <p>
            We retain personal data only for as long as necessary to fulfill the
            purposes for which it was collected, as described in this Privacy
            Policy, and to comply with applicable legal requirements. Because
            different types of data serve different purposes, the applicable
            retention periods can vary. Our general approach to data retention
            is outlined below:
          </p>
          <ul className="list-disc pl-6">
            <li>
              <strong>Active Account Data:</strong> For as long as you maintain
              an active account with Pulse, we will keep the personal
              information you have provided and that we have collected, so that
              we can provide you with the service. This includes your profile
              information, photos, verification status, match and chat history,
              etc. Keeping this data is necessary to operate your account and
              allow you to use the Platform continuously without starting from
              scratch each time. If you continue using Pulse, we will retain
              your data until you decide to delete your account or specific
              data.
            </li>
            <li>
              <strong>Inactive Accounts:</strong> If you stop using Pulse and
              become inactive (for example, you haven't logged in for a long
              period), we may eventually archive or delete your account after a
              certain period of inactivity to free up resources and protect
              privacy. While we have no fixed timeline to purge inactive
              accounts yet, we anticipate implementing a policy such as removing
              or anonymizing accounts that have not been accessed for, say, 2
              years, after sending a notice to the registered email. Data from
              archived accounts may be retained in a non-public backup for a
              time, or anonymized for statistical purposes.
            </li>
            <li>
              <strong>Account Deletion:</strong> You have the option to delete
              your Pulse account at any time (either through a self-service
              feature in the app or by contacting support with a deletion
              request). When you delete your account, we will initiate the
              process of removing your personal data from our active systems.
              This typically includes clearing your profile information, photos,
              and personal details from the app, making your profile no longer
              visible to others. Your messaging history and connections will be
              disassociated from your identity (for example, your name will no
              longer be shown in conversations you had with others; however,
              those other users may still retain the text of conversations they
              had with you in their own inbox, under an anonymous or placeholder
              name). We aim to complete the deletion of most of your personal
              data within a short timeframe (usually within 30 days) after
              receiving your request. However, please note that we may retain
              certain limited information even after account deletion in
              specific cases:
            </li>
            <li>
              <strong>Legal Obligations and Dispute Resolution:</strong> We
              might keep data necessary for compliance with laws (for instance,
              financial records for tax, or information related to a formal
              legal request). If there is an ongoing issue, claim, or dispute
              involving your account, we may retain the relevant data until it
              is resolved.
            </li>
            <li>
              <strong>Security and Prevention:</strong> We may retain
              information like email, phone, device ID, and verification outcome
              in a secure suppression list to prevent banned users from
              re-registering or to help detect and prevent fraud. This is a
              legitimate interest to keep our community safe.
            </li>
            <li>
              <strong>Backups:</strong> Our systems routinely perform backups to
              ensure reliability. Personal data might persist in encrypted
              backups for a certain period even after deletion from live
              databases. These backups are retained only for disaster recovery
              purposes and are purged on a rolling schedule. We do not use
              backup data for any active purpose and any restoration process
              would honor deletion requests (meaning if we had to restore a
              backup, we would still delete users who had previously requested
              deletion).
            </li>
            <li>
              <strong>Chat and Content Deletion:</strong> If you choose to
              delete individual messages or entire conversations, those will be
              removed from your account view immediately. They may still exist
              in the recipient’s account (as noted) and on our servers for a
              short period as part of routine data syncing or backup. We
              generally treat user-initiated deletions as signals to erase that
              content from our production systems, but residual copies might
              persist temporarily. Similarly, if you remove or replace photos,
              the old photos will no longer be visible to others, and we will
              eventually purge them from storage (aside from possible backup
              traces).
            </li>
            <li>
              <strong>Analytics Data:</strong> Aggregated and anonymized data
              (which no longer identifies you) may be retained longer than
              personal data. For example, overall statistics about user growth
              or match rates may be kept for historical analysis. This data has
              no personal identifiers attached to it and may be kept
              indefinitely to inform our business trends, since it does not
              impact user privacy.
            </li>
          </ul>
          <p>
            In summary, we keep your personal information for as long as you’re
            a user and for the periods afterwards only as necessary for
            legitimate and lawful reasons. When personal data is no longer
            needed, we either irreversibly anonymize it (so that it can no
            longer be associated with you) or securely delete it. If you have
            specific questions about our data retention practices for different
            types of data, you can contact us for more details.
          </p>
        </section>

        {/* Section 9: Your Rights and Choices */}
        <section>
          <h2 className="text-xl font-semibold">9. Your Rights and Choices</h2>
          <p>
            As a user of Pulse, especially if you are located in the European
            Union or a jurisdiction with similar data protection laws, you have
            certain rights regarding your personal data. PulseDate Technologies
            Ltd. is committed to facilitating the exercise of these rights and
            providing you with control over your information. Below we outline
            your key rights and the choices you have in managing your data:
          </p>
          <ul className="list-disc pl-6">
            <li>
              <strong>Access Your Data:</strong> You have the right to request a
              copy of the personal data we hold about you, commonly known as a
              Data Subject Access Request. This includes information like your
              profile details, photos, verification records, and possibly logs
              of your activity that can be linked to you. We will provide this
              information in a structured, commonly used electronic format
              (often JSON or CSV, or a PDF report). Most of your basic profile
              and account information can be accessed directly by you by logging
              into your account. If you need a comprehensive export, you can
              contact us to request it. We will respond within the timeframe
              required by law (generally within 30 days for GDPR, extendable in
              complex cases).
            </li>
            <li>
              <strong>Rectification (Correcting Your Data):</strong> You have
              the right to correct any inaccurate or incomplete personal data we
              have about you. Much of your information can be corrected by you
              directly through the profile edit features (for example, you can
              change your bio, update your photos, or correct your location and
              other preferences in the app). If you cannot correct something
              yourself – say, you noticed an error in data you cannot edit, or
              you need to update information related to verification – you can
              reach out to us and we will help to make the correction, as long
              as we can verify the accuracy of the new information. Keeping your
              data up-to-date helps us provide you with better service, so we
              encourage you to make use of this right.
            </li>
            <li>
              <strong>Deletion (Right to be Forgotten):</strong> You have the
              right to request deletion of your personal data. As described in
              the Data Retention section, you can delete your entire account via
              the app interface or by contacting us. Once we verify your request
              (for example, making sure it’s really you making the request), we
              will delete your personal data from our active systems, except for
              any information we are required or permitted to retain by law or
              for legitimate purposes (which we outlined above, such as fraud
              prevention or legal compliance data). After deletion, your profile
              will no longer be visible on Pulse. If you only want to delete
              specific information (e.g., a particular photo or message), you
              can generally do so in the app. If a piece of information is not
              easily deletable by you, you can ask us and we will do our best to
              remove it, provided we have no lawful reason to keep it.
            </li>
            <li>
              <strong>Data Portability:</strong> This right allows you to obtain
              a reusable copy of certain information that you have provided to
              us in a structured, machine-readable format, and to have that
              information transferred to another service where technically
              feasible. In practice, this overlaps with the access request - for
              example, you might request a copy of your profile data and
              messages to port to another app. We will provide the data in a
              commonly used digital format (such as JSON or CSV) so that you
              could potentially import it elsewhere if another service supports
              it. Note that this right applies to data you provided or that was
              generated by your use of the service, and where the processing is
              based on consent or contract (which is typically the case for
              Pulse). It does not apply to data we derived for our internal
              analytics or that is in an unstructured format.
            </li>
            <li>
              <strong>Restriction of Processing:</strong> You have the right in
              certain circumstances to ask us to suspend the processing of your
              personal data. For example, if you contest the accuracy of data,
              you can request we halt processing it (aside from storing it
              securely) until we verify its accuracy. Or if you object to
              processing that we are carrying out under legitimate interests,
              you can request a restriction while the objection is under review.
              When processing is restricted, we can store the data but not use
              it. If you need us to essentially put your data “on hold,” you can
              contact us to request this and explain the circumstances, and we
              will assess if the conditions for restriction are met.
            </li>
            <li>
              <strong>Object to Processing:</strong> You have the right to
              object to our processing of your personal data when that
              processing is based on a legitimate interest (including profiling
              based on those interests). If you raise an objection, we will
              review the reasons and unless we have a compelling legitimate
              ground to continue (or the processing is needed for legal claims),
              we will likely cease the processing in question. In the context of
              Pulse, an example might be objecting to processing for analytics
              or direct marketing. We do not currently send marketing without
              consent, but if we did, you could object (or simply unsubscribe).
              If you object to certain processing (like some analytics), note
              that it might affect our ability to provide the service optimally,
              but we will respect such requests as required.
            </li>
            <li>
              <strong>Withdraw Consent:</strong> In cases where we rely on your
              consent to process data, you have the right to withdraw that
              consent at any time. Withdrawing consent will not affect the
              lawfulness of any processing we already performed based on
              consent, but it will mean we stop the consent-based processing
              going forward. For example, if you consented to share extra
              profile information or to participate in promotional activities,
              you can change your mind. If in the future we ask for consent for
              things like using precise location or using your data for new
              features, you will always have the ability to revoke that consent
              (likely through your app settings or by contacting us).
              Withdrawing consent may result in certain features being
              unavailable if they required that consent.
            </li>
            <li>
              <strong>Automated Decision-Making:</strong> Pulse does not
              currently make any decisions about you that have a legal or
              similarly significant effect solely by automated means (without
              any human involvement). Decisions like account verification or
              bans involve human moderators. Our matching suggestions are
              automated but do not have legal or drastic impacts on you.
              However, if this ever changes and we introduce automated
              decision-making (e.g., an AI-based moderation with no human
              review), you would have the right to request human intervention or
              to contest the decision. We include this here for completeness,
              but as of now, it's not applicable in a way that significantly
              affects users.
            </li>
            <li>
              <strong>Complaints:</strong> If you believe your data rights have
              been violated or you have a concern about how we handle your
              personal information, you have the right to lodge a complaint with
              a supervisory authority. PulseDate Technologies Ltd. is based in
              Cyprus, so our lead supervisory authority is the Cyprus
              Commissioner for Personal Data Protection. You can contact them or
              the data protection authority in your country of residence within
              the EU/EEA. Of course, we hope to resolve any issue by working
              directly with you, so we encourage you to contact us first with
              any complaint and we will do our best to address it swiftly and
              thoroughly.
            </li>
            <li>
              <strong>Your Choices in the App:</strong> In addition to formal
              rights, we also provide user controls within the Pulse app for
              your convenience and privacy:
              <ul className="list-disc pl-6">
                <li>
                  You can update your profile information at any time or remove
                  content (like deleting photos or editing written sections).
                </li>
                <li>
                  You can use features like block or unmatch to stop further
                  contact from specific users. When you block someone, they
                  cannot see your profile or message you, and vice versa.
                </li>
                <li>
                  The app allows you to delete or clear conversations from your
                  side if you wish to remove those messages from your view.
                </li>
                <li>
                  If you want to pause your presence without deleting your
                  account, you may set your profile to invisible or deactivate
                  (if such a feature exists) so you won’t appear in
                  recommendations until you reactivate. (This is hypothetical if
                  Pulse offers an incognito mode or similar.)
                </li>
                <li>
                  You can opt out of any non-essential notifications or
                  communications. For instance, you can usually adjust settings
                  to reduce email notifications or push notifications from us,
                  except for critical account or security alerts.
                </li>
              </ul>
            </li>
          </ul>
          <p>
            To exercise any of your data rights, you can contact us at the
            contact details provided in the "Contact Us" section below. For
            certain requests like data access or deletion, we may need to verify
            your identity (to ensure we’re dealing with the correct person’s
            data). Verification might involve confirming control of your account
            or providing identifying information. We will respond to all
            legitimate requests as quickly as possible and in any event within
            the timeframes set by applicable law. There is generally no fee for
            exercising your rights, but note that repetitive or excessive
            requests may allow us to charge a reasonable fee or refuse the
            request under certain conditions. We will explain any such decisions
            if they were to occur.
          </p>
          <p>
            Your privacy and control over your information are high priorities
            for us. We are here to help you exercise the above rights and to
            answer any questions about them.
          </p>
        </section>

        {/* Section 10: Age Restrictions */}
        <section>
          <h2 className="text-xl font-semibold">10. Age Restrictions</h2>
          <p>
            Protecting the privacy of minors is extremely important to us. Pulse
            is strictly an 18+ platform, and we do not knowingly collect or
            solicit any personal information from anyone under the age of 18.
            Our services are not directed to children, and individuals under 18
            are not allowed to use Pulse.
          </p>
          <ul className="list-disc pl-6">
            <li>
              <strong>No Users Under 18:</strong> During the registration
              process, we require you to provide your date of birth to confirm
              that you are at least 18 years old. Our verification process
              (including face video verification and potentially ID checks) is
              also designed to catch and prevent underage users from joining. If
              you are under 18, you must not attempt to register for Pulse or
              provide us with any personal information. If we discover or have
              reason to believe that you are under 18, we will take immediate
              action to terminate your account and delete your information. This
              is both to comply with legal requirements and to maintain a
              mature, adult community as promised.
            </li>
            <li>
              <strong>Parental Guidance:</strong> We encourage parents or
              guardians to monitor their teenagers’ online activities. If you
              are a parent or guardian and become aware that your minor child
              (under 18) has created an account on Pulse or otherwise provided
              us personal data, please contact us right away. We will take steps
              to remove the data and terminate the child’s account in line with
              applicable laws.
            </li>
            <li>
              <strong>No Data of Children:</strong> Since we do not permit or
              target children on our platform, we do not intentionally collect
              any information that would fall under child privacy regulations
              (like the U.S. COPPA or similar laws elsewhere). We do not have
              sections of our site aimed at children, nor do we knowingly engage
              in any marketing towards individuals under 18. All of our content,
              including advertising and communications, are intended for adult
              audiences.
            </li>
            <li>
              <strong>Verification to Prevent Minor Access:</strong> As part of
              our commitment to an 18+ platform, our verification process serves
              as a gatekeeper. By using live video verification and human
              review, we aim to verify users’ ages and identities. While this is
              not foolproof, it adds a strong deterrent against minors trying to
              join. We also encourage all users: if you encounter someone on the
              platform you suspect is underage, please use the report feature to
              alert us. Our moderation team will investigate promptly, and if
              the person is confirmed to be under 18, we will ban the user and
              erase their data.
            </li>
            <li>
              <strong>This section is to reaffirm:</strong> Pulse is not for
              children. We have zero tolerance for underage use. By using Pulse,
              you represent that you are 18 or older. If that representation is
              or becomes untrue, we will enforce our policies accordingly.
            </li>
          </ul>
        </section>

        {/* Section 11: Changes to This Privacy Policy */}
        <section>
          <h2 className="text-xl font-semibold">
            11. Changes to This Privacy Policy
          </h2>
          <p>
            From time to time, we may update or revise this Privacy Policy to
            reflect changes in our practices, technologies, legal requirements,
            or for other operational reasons. We reserve the right to modify
            this Policy at any time in compliance with applicable law.
          </p>
          <ul className="list-disc pl-6">
            <li>
              <strong>Notification of Changes:</strong> If we make material
              changes to this Privacy Policy, we will notify you in an
              appropriate manner. For example, we may display a prominent notice
              within the app or on our website (such as a banner or pop-up
              notification) and/or send you an email or in-app message informing
              you of the update. The notice will direct you to the revised
              Policy. Minor changes (such as clarifications, typographical
              corrections, or updates that do not significantly affect your
              rights or how we handle your data) may be posted without a
              specific announcement, so please periodically review this page for
              the latest information on our privacy practices.
            </li>
            <li>
              <strong>Effective Date:</strong> At the top of this Policy, we
              include the "Last Updated" date. This date helps you quickly
              identify when we last revised the document. All changes are
              effective when we post the updated Privacy Policy, unless
              otherwise specified. If you continue to use Pulse after the new
              Policy has taken effect, it will signify your acceptance of those
              changes. However, if any change requires your consent (due to a
              change in how we use data, for instance), we will obtain that
              consent as needed.
            </li>
            <li>
              <strong>Review and Feedback:</strong> We encourage users to stay
              informed about our privacy practices. If you have questions or
              feedback about changes to the Privacy Policy, you can contact us.
              We document older versions of our Privacy Policy (and will provide
              prior versions upon request or as required by law), so you can see
              how our privacy commitments have evolved. We strive to be
              transparent and open with our community, and that includes being
              clear about how we protect your privacy.
            </li>
          </ul>
          <p>
            In summary, we won’t surprise you with unexpected data practices;
            any significant shift in how we collect or use your data will be
            communicated and reflected in this Policy. Your continued use of
            Pulse after notice of changes indicates your acknowledgement of the
            modifications. If you disagree with any changes, you may discontinue
            using the service and/or exercise your rights (such as deleting your
            account).
          </p>
        </section>

        {/* Section 12: Contact Us */}
        <section>
          <h2 className="text-xl font-semibold">12. Contact Us</h2>
          <p>
            PulseDate Technologies Ltd. is dedicated to respecting your privacy.
            If you have any questions, concerns, or requests regarding this
            Privacy Policy or our data practices, please reach out to us. We’re
            here to help.
          </p>
          <p>
            <strong>Contact Information:</strong>
          </p>
          <ul className="list-disc pl-6">
            <li>
              <strong>Email:</strong> You can email our Privacy Team at{" "}
              <a
                href="mailto:support@pulse-date.com"
                className="hover:underline"
              >
                support@pulse-date.com
              </a>{" "}
              for any privacy-related inquiries, including questions about your
              personal data, requests to exercise your rights, or reports of
              security/privacy issues. (If writing to us, please include the
              email address associated with your Pulse account and a clear
              description of your request or question. We may need to verify
              your identity before fulfilling certain requests.)
            </li>
            <li>
              <strong>In-App Support:</strong> You may also contact us through
              the Pulse app by going to Settings - Contact Us. Messaging us
              through the app’s support channel can help us verify your identity
              automatically and assist you quicker.
            </li>
          </ul>
          <p>
            We will address all requests or concerns as promptly and thoroughly
            as possible. If you contact us for a privacy issue, you can
            generally expect an acknowledgment within a few business days and a
            resolution or answer within 30 days or the timeline required by
            applicable law.
          </p>
          <p>
            Thank you for trusting Pulse with your personal information. We
            value your privacy and are constantly working to protect and respect
            your data. We hope this Privacy Policy has helped you understand how
            we handle your information. If anything remains unclear, please do
            not hesitate to get in touch.
          </p>
        </section>

        <p className="mt-8">
          By using Pulse, you acknowledge that you have read and understood this
          Privacy Policy.
        </p>
      </div>
    </div>
  );
}
