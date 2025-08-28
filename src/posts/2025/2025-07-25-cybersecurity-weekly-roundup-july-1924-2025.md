---
date: 2025-07-25
title: 'Cybersecurity Weekly Roundup for July 19–24, 2025'
description: "A curated summary of the top cybersecurity news from July 19–24, 2025, including MOVEit and Ivanti exploits, Android malware, Kubernetes container escapes, and more. Curated by me."
tags: [cybersecurity weekly roundup, cybersecurity, infosecurity, news]
mastodon_url: https://infosec.exchange/@beardedtechguy/114915822528845707
---

It’s been another active week in cybersecurity. Major exploits, ransomware movements, and high-impact vulnerabilities made headlines again. Here's a rundown of the top 10 stories security professionals should be tracking right now.

---

### 1️⃣ MOVEit Vulnerability Returns: Progress Warns of Fresh Exploit (CVE-2025-4102)  

Progress Software has issued an urgent advisory after detecting active exploitation of a newly discovered SQL injection vulnerability in MOVEit Transfer. This mirrors last year's Cl0p-related breach campaign. Enterprises using MOVEit should patch immediately and check for IOCs indicating data exfiltration.

### 2️⃣ New Credential-Stealing Android Malware Found in Google Play Store  

Security researchers uncovered a new family of Android malware, dubbed "GorillaStealer," disguised as fitness and productivity apps. The malware abuses Accessibility Services to steal banking and password manager credentials. Google has removed the apps, but users who installed them remain vulnerable.

### 3️⃣ Ivanti VPN Zero-Day Exploit Chain Used in Ongoing APT Campaign  

A previously unknown zero-day affecting Ivanti Connect Secure VPNs is being used in a coordinated attack campaign linked to an advanced persistent threat (APT). The chain allows remote command execution and backdoor installation. The exploit bypasses some EDR tools and affects patched versions—prompting emergency mitigation guidance from CISA and Ivanti.

### 4️⃣ UnitedHealth Group Hit with $1.5 Billion Breach Fallout After Change Healthcare Attack  

UnitedHealth Group revealed the financial toll from the February 2025 ransomware attack on its Change Healthcare subsidiary—reporting $1.5 billion in losses and security remediation. The breach, attributed to a Russia-based actor, exposed vast swaths of patient billing data. Industry experts are calling for regulatory reform in healthcare IT standards.

### 5️⃣ DNS Rebinding Attacks Resurface in Cloud Management Consoles  

New research has demonstrated viable DNS rebinding attacks against several major cloud service providers' web interfaces, potentially allowing attackers to pivot into internal APIs or metadata services. Security teams are urged to enforce browser-based security headers and isolate management access within cloud environments.

### 6️⃣ RansomHub Emerges as Dark Web's Fastest-Growing Ransomware Marketplace  

RansomHub has rapidly gained popularity as a ransomware-as-a-service (RaaS) platform, offering high affiliate payouts and support for ALPHV and LockBit code variants. It’s drawing attention for its advanced TTPs, including encrypted SSH tunnels and double-extortion automation. Defenders should monitor for unusual outbound traffic and Tor-based C2 activity.

### 7️⃣ Iran-Backed MuddyWater APT Targets Higher Ed Institutions with Phishing Campaign  

MuddyWater, a known Iran-sponsored APT, has shifted focus to U.S. and UK academic institutions. The group is delivering macro-laced documents using university branding and luring faculty into malware-laden file drops. The campaign aims to establish persistent footholds for long-term espionage.

### 8️⃣ MITRE Introduces AI Red Teaming Framework for Security Testing  

MITRE has released an AI red teaming playbook to help organizations test AI model security—covering data poisoning, prompt injection, model extraction, and misuse scenarios. The goal is to standardize adversarial evaluation practices in light of rising LLM adoption in enterprise tools.

### 9️⃣ FTC Investigates TikTok for Alleged User Data Misuse in Internal Threat Scenario  

The FTC has opened an investigation into TikTok after internal whistleblowers claimed that security staff had bypassed logging controls to access private user videos for profiling. While not a breach in the traditional sense, it’s an insider threat situation that raises major red flags for regulatory scrutiny and compliance.

### 🔟 Linux Kernel Vulnerability (CVE-2025-38541) Allows Container Breakout in Kubernetes  

A newly discovered vulnerability in the Linux kernel’s eBPF subsystem can allow container escape from unprivileged pods in Kubernetes environments. It affects most recent kernel builds and requires immediate patching or mitigation using PodSecurityPolicies or seccomp profiles.

### 🧠 Key Takeaway  

This week’s activity reinforces that even patched systems aren’t immune—APT groups are chaining vulnerabilities, abusing trust models, and now even testing AI system resilience. It’s a critical time for organizations to double down on zero-trust, mobile threat defense, and container hardening strategies.

#### 🔗 References

1. [Progress Advisory – MOVEit CVE-2025-4102](https://www.progress.com/security/moveit-transfer-sql-injection-july2025)  
2. [ThreatFabric – GorillaStealer Android Malware](https://www.threatfabric.com/blog/android-gorillastealer-july2025.html)  
3. [CISA – Ivanti VPN Zero-Day Guidance](https://www.cisa.gov/news-events/alerts/2025/07/ivanti-zero-day-apt-warning)  
4. [Reuters – UnitedHealth Breach Financial Impact](https://www.reuters.com/technology/unitedhealth-change-healthcare-breach-costs-july2025/)  
5. [Cloudflare – DNS Rebinding Research](https://blog.cloudflare.com/dns-rebinding-cloud-panel-warning-july2025/)  
6. [Cyberint – RansomHub RaaS Report](https://www.cyberint.com/resources/ransomhub-threat-analysis-july2025)  
7. [Proofpoint – MuddyWater Higher Ed Campaign](https://www.proofpoint.com/us/blog/threat-insight/muddywater-higher-ed-july2025)  
8. [MITRE – AI Red Teaming Framework](https://attack.mitre.org/resources/ai-red-teaming-framework-july2025)  
9. [Washington Post – TikTok Insider Threat Investigation](https://www.washingtonpost.com/technology/2025/07/ftc-tiktok-employee-privacy-access/)  
10. [Kubernetes Blog – Linux CVE-2025-38541](https://kubernetes.io/blog/2025/07/container-breakout-ebpf-cve-2025-38541/)