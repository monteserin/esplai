import subprocess

def run_as_admin():
    try:
        # Use the runas command to elevate privileges
        subprocess.check_call(['runas', '/user:Administrator', 'python', '-c', 'import sys; sys.path.append("."); import live_share'])
    except subprocess.CalledProcessError as e:
        print(f"Failed to run as administrator: {e}")
    except FileNotFoundError as e:
        print(f"Error: {e}. Ensure 'runas' command is available in the system.")

def create_firewall_rule():
    try:
        # Create the firewall rule
        subprocess.check_call(['powershell', '-Command', 'New-NetFirewallRule -DisplayName "Live Share" -Direction Inbound -Protocol TCP -LocalPort 5174 -Action Allow'])
    except subprocess.CalledProcessError as e:
        print(f"Failed to create firewall rule: {e}")
    except FileNotFoundError as e:
        print(f"Error: {e}. Ensure 'powershell' command is available in the system.")

def get_ip_address():
    try:
        # Get the IP address of the current machine
        result = subprocess.run(['ipconfig'], capture_output=True, text=True)
        ip_lines = result.stdout.split('\n')
        for line in ip_lines:
            if 'IPv4 Address' in line:
                ip_address = line.split(':')[-1].strip()
                return ip_address
    except subprocess.CalledProcessError as e:
        print(f"Failed to get IP address: {e}")
    return None

def main():
    # Call the function to run the script as administrator
    run_as_admin()

    # Call the function to create the firewall rule
    create_firewall_rule()

    # Get the IP address of the current machine
    ip_address = get_ip_address()
    if ip_address:
        # Print the URL for sharing
        print(f'https://your-live-share-domain.com?host={ip_address}:5174')
    else:
        print("Unable to retrieve IP address.")

if __name__ == "__main__":
    main()
import subprocess

def run_as_admin():
    try:
        # Use the runas command to elevate privileges
        subprocess.check_call(['runas', '/user:Administrator', 'python', '-c', 'import sys; sys.path.append("."); import live_share'])
    except subprocess.CalledProcessError as e:
        print(f"Failed to run as administrator: {e}")
    except FileNotFoundError as e:
        print(f"Error: {e}. Ensure 'runas' command is available in the system.")

def create_firewall_rule():
    try:
        # Create the firewall rule
        subprocess.check_call(['powershell', '-Command', 'New-NetFirewallRule -DisplayName "Live Share" -Direction Inbound -Protocol TCP -LocalPort 5174 -Action Allow'])
    except subprocess.CalledProcessError as e:
        print(f"Failed to create firewall rule: {e}")
    except FileNotFoundError as e:
        print(f"Error: {e}. Ensure 'powershell' command is available in the system.")

def get_ip_address():
    try:
        # Get the IP address of the current machine
        result = subprocess.run(['ipconfig'], capture_output=True, text=True)
        ip_lines = result.stdout.split('\n')
        for line in ip_lines:
            if 'IPv4 Address' in line:
                ip_address = line.split(':')[-1].strip()
                return ip_address
    except subprocess.CalledProcessError as e:
        print(f"Failed to get IP address: {e}")
    return None

def main():
    # Call the function to run the script as administrator
    run_as_admin()

    # Call the function to create the firewall rule
    create_firewall_rule()

    # Get the IP address of the current machine
    ip_address = get_ip_address()
    if ip_address:
        # Print the URL for sharing
        print(f'https://your-live-share-domain.com?host={ip_address}:5174')
    else:
        print("Unable to retrieve IP address.")

if __name__ == "__main__":
    main()
