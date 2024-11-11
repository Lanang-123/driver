import L from 'leaflet';
import React, { useState, useEffect } from 'react';
import { FaMapMarkerAlt, FaDollarSign, FaMap } from 'react-icons/fa';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import Modal from 'react-modal';
import 'leaflet/dist/leaflet.css';

// Icon for driver
const greenMotorIcon = new L.Icon({
    iconUrl: 'https://thumbs.dreamstime.com/b/green-motorcycle-biker-isolated-white-background-156484727.jpg',
    iconSize: [25, 25],
    iconAnchor: [12, 25],
    popupAnchor: [0, -25],
});

function LocationMarker({ setLocation, setAddress, position, setPosition }) {
    useMapEvents({
        click(e) {
            // Add validation to check if the location is on land
            const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${e.latlng.lat}&lon=${e.latlng.lng}`;
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    if (data.address.country_code) {
                        setPosition(e.latlng);
                        setLocation(e.latlng);
                        setAddress(data.display_name);
                    } else {
                        alert("Location is in the sea. Please select a valid location on land.");
                    }
                })
                .catch(error => console.error('Error:', error));
        },
    });

    return position === null ? null : (
        <Marker position={position} />
    );
}

function Order() {
    const [currentLocation, setCurrentLocation] = useState('');
    const [destination, setDestination] = useState('');
    const [currentCoordinates, setCurrentCoordinates] = useState(null);
    const [destinationCoordinates, setDestinationCoordinates] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [locationType, setLocationType] = useState('');
    const [locationDetails, setLocationDetails] = useState('');
    const [tempLocation, setTempLocation] = useState(null);
    const [address, setAddress] = useState('');
    const [distance, setDistance] = useState(null);
    const [defaultLocation, setDefaultLocation] = useState([-6.200000, 106.816666]);
    const [estimatedCost, setEstimatedCost] = useState(null);
    const [drivers, setDrivers] = useState([]); // State for storing driver data

    const costPerKm = 10; // biaya per kilometer

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    const currentLatLng = { lat: latitude, lng: longitude };
                    setDefaultLocation([latitude, longitude]);
                    setCurrentCoordinates(currentLatLng);
                    setTempLocation(currentLatLng);

                    const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`;
                    fetch(url)
                        .then(response => response.json())
                        .then(data => {
                            setCurrentLocation(data.display_name);
                            setAddress(data.display_name);
                        })
                        .catch(error => console.error('Error:', error));

                    // Fetch nearby drivers data
                    fetchDrivers(latitude, longitude);
                },
                (error) => {
                    console.error("Error getting the current position:", error);
                }
            );
        } else {
            console.error("Geolocation is not supported by this browser.");
        }
    }, []);

    const fetchDrivers = (latitude, longitude) => {
        // Dummy data for drivers
        const dummyDrivers = [
            { id: 1, name: 'Driver 1', lat: latitude + 0.0020, lng: longitude + 0.0011 },
            { id: 2, name: 'Driver 2', lat: latitude - 0.0033, lng: longitude - 0.0038 },
            { id: 3, name: 'Driver 3', lat: latitude + 0.0038, lng: longitude - 0.0045 },
            { id: 4, name: 'Driver 4', lat: latitude - 0.0060, lng: longitude + 0.0045 },
            { id: 5, name: 'Driver 5', lat: latitude - 0.0045, lng: longitude + 0.0049 },
        ];

        const validDrivers = [];

        // Validate each driver location using reverse geocoding
        dummyDrivers.forEach((driver) => {
            const { lat, lng } = driver;

            const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`;
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    // If the address contains a country code, it's valid (on land)
                    if (data.address && data.address.country_code) {
                        validDrivers.push(driver); // Add valid driver to the list
                    }

                    // Set the filtered driver data to the state after all checks
                    if (validDrivers.length === dummyDrivers.length) {
                        setDrivers(validDrivers);
                    }
                })
                .catch(error => console.error('Error fetching driver location:', error));
        });
    };


    const handleLocationChange = (e, type) => {
        if (type === 'current') {
            setCurrentLocation(e.target.value);
        } else {
            setDestination(e.target.value);
        }
    };

    const openModal = (type) => {
        setLocationType(type);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const confirmLocation = () => {
        if (locationType === 'current') {
            setCurrentLocation(address);
            setCurrentCoordinates(tempLocation);
        } else {
            setDestination(address);
            setDestinationCoordinates(tempLocation);
        }
        closeModal();
    };

    const calculateDistance = (lat1, lon1, lat2, lon2) => {
        const R = 6371;
        const dLat = (lat2 - lat1) * (Math.PI / 180);
        const dLon = (lon2 - lon1) * (Math.PI / 180);
        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c;
    };

    useEffect(() => {
        if (currentCoordinates && destinationCoordinates) {
            const { lat: currentLat, lng: currentLng } = currentCoordinates;
            const { lat: destLat, lng: destLng } = destinationCoordinates;
            const dist = calculateDistance(currentLat, currentLng, destLat, destLng);
            setDistance(dist.toFixed(2));
            const cost = dist * costPerKm;
            setEstimatedCost(cost.toFixed(2));
        }
    }, [currentCoordinates, destinationCoordinates]);

    return (
        <section className="order bg-teal-50 text-white py-10 min-h-screen flex flex-col items-center px-8 md:px-0">
            <div className="w-full bg-white max-w-md mx-auto rounded-lg overflow-hidden shadow-lg relative">
                <div className="bg-teal-700 py-4 text-center text-xl font-bold">Order Driver</div>
                <div className="flex justify-center mt-6">
                    <img
                        src="https://images.unsplash.com/photo-1491921125492-f0b9c835b699?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Driver"
                        className="rounded-full w-32 h-32 border-4 border-teal-700"
                    />
                </div>
                <div className="px-6 py-8">
                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-2 text-black">Current Location</label>
                        <div className="flex items-center rounded-md bg-gray-100 px-3 py-2 border-2 border-teal-700">
                            <input
                                type="text"
                                className="w-full text-gray-500 border-none focus:outline-none"
                                placeholder="Enter current location"
                                disabled
                                value={currentLocation}
                                onChange={(e) => handleLocationChange(e, 'current')}
                            />
                            <button
                                className="ml-2 p-2 bg-teal-500 rounded text-white hover:bg-teal-600 flex justify-between"
                                onClick={() => openModal('current')}
                            >
                                <FaMap />
                                <p className='text-xs font-medium ml-1'>Maps</p>
                            </button>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-2 text-black">Destination</label>
                        <div className="flex items-center rounded-md bg-gray-100 px-3 py-2 border-2 border-teal-700">
                            <input
                                type="text"
                                className="w-full text-gray-500 border-none focus:outline-none"
                                disabled
                                placeholder="Enter destination"
                                value={destination}
                                onChange={(e) => handleLocationChange(e, 'destination')}
                            />
                            <button
                                className="ml-2 p-2 bg-teal-500 rounded text-white hover:bg-teal-600 flex justify-between"
                                onClick={() => openModal('destination')}
                            >
                                <FaMap />
                                <p className='text-xs font-medium ml-1'>Maps</p>
                            </button>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-2 text-black">Distance</label>
                        <div className="flex items-center rounded-md bg-gray-100 px-3 py-2 border-2 border-teal-700">
                            <input
                                type="text"
                                className="w-full text-gray-500 border-none focus:outline-none"
                                disabled
                                placeholder="Distance"
                                value={distance ? `${distance} km` : ''}
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-2 text-black">Estimated Cost</label>
                        <div className="flex items-center rounded-md bg-gray-100 px-3 py-2 border-2 border-teal-700">
                            <input
                                type="text"
                                className="w-full text-gray-500 border-none focus:outline-none"
                                disabled
                                placeholder="Estimated Cost"
                                value={estimatedCost ? `${estimatedCost} NTD` : ''}
                            />
                        </div>
                    </div>
                    <button className="w-full bg-teal-700 text-white py-2 rounded-md">Order Now</button>
                </div>
            </div>

            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Location Picker Modal"
                ariaHideApp={false}
                className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
            >
                <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-3xl h-full md:h-auto">
                    <h2 className="text-lg font-semibold mb-4">Pick Location</h2>
                    <div className="h-96">
                        <MapContainer center={defaultLocation} zoom={13} scrollWheelZoom={false} className="h-full">
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <LocationMarker
                                setLocation={setTempLocation}
                                setAddress={setAddress}
                                position={tempLocation}
                                setPosition={setTempLocation}
                            />
                            {drivers.map(driver => (
                                <Marker key={driver.id} position={[driver.lat, driver.lng]} icon={greenMotorIcon}>
                                    <Popup>
                                        {driver.name}
                                    </Popup>
                                </Marker>
                            ))}
                        </MapContainer>
                    </div>
                    <div className="flex justify-end mt-4">
                        <button className="bg-gray-500 text-white px-4 py-2 rounded-md mr-2" onClick={closeModal}>Cancel</button>
                        <button className="bg-teal-700 text-white px-4 py-2 rounded-md" onClick={confirmLocation}>Confirm</button>
                    </div>
                </div>
            </Modal>
        </section>
    );
}

export default Order;
